import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWaitlist, getVerificationTokenForTesting, getDriverWaitlist } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination } from '@/components/ui/admin-pagination';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Mail } from 'lucide-react';

interface WaitlistEntry {
  id: number;
  email: string;
  referral_code: string;
  referred_by: string | null;
  position: number;
  original_position: number;
  signup_date: string;
  is_verified: boolean;
  referral_count: number;
}



const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  // Passenger waitlist state
  const [waitlistData, setWaitlistData] = useState<WaitlistEntry[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Driver waitlist state
  const [driverWaitlistData, setDriverWaitlistData] = useState<WaitlistEntry[]>([]);
  const [driverTotalCount, setDriverTotalCount] = useState<number>(0);
  const [driverCurrentPage, setDriverCurrentPage] = useState<number>(1);
  const [driverPageCount, setDriverPageCount] = useState<number>(1);
  const [driverSearchTerm, setDriverSearchTerm] = useState<string>('');
  const [driverVerifiedOnly, setDriverVerifiedOnly] = useState<boolean>(false);
  const [isDriverLoading, setIsDriverLoading] = useState<boolean>(false);

  const pageSize = 100;
  const navigate = useNavigate();

  // Load initial data with explicit parameters to avoid stale closure issues
  const loadInitialData = async () => {
    console.log('🚀 Loading initial data with explicit parameters');

    // Load passenger waitlist with initial values
    setIsLoading(true);
    try {
      const result = await getWaitlist(pageSize, 1, false, '');
      console.log('🚀 Initial passenger waitlist result:', result);
      if (result.success) {
        setWaitlistData(result.results || []);
        setTotalCount(result.total_count || 0);
        setPageCount(result.page_count || 1);
        console.log('✅ Initial passenger data loaded:', {
          resultsCount: result.results?.length || 0,
          totalCount: result.total_count || 0
        });
      } else {
        console.error('❌ Error loading initial passenger waitlist:', result.message);
      }
    } catch (error) {
      console.error('❌ Error loading initial passenger waitlist:', error);
    } finally {
      setIsLoading(false);
    }

    // Load driver waitlist with initial values
    setIsDriverLoading(true);
    try {
      const result = await getDriverWaitlist(pageSize, 1, false, '');
      console.log('🚀 Initial driver waitlist result:', result);
      if (result.success) {
        setDriverWaitlistData(result.results || []);
        setDriverTotalCount(result.total_count || 0);
        setDriverPageCount(result.page_count || 1);
        console.log('✅ Initial driver data loaded:', {
          resultsCount: result.results?.length || 0,
          totalCount: result.total_count || 0
        });
      } else {
        console.error('❌ Error loading initial driver waitlist:', result.message);
      }
    } catch (error) {
      console.error('❌ Error loading initial driver waitlist:', error);
    } finally {
      setIsDriverLoading(false);
    }
  };

  // Simple authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a simple authentication for demo purposes
    // In a real application, you would use a secure authentication system
    if (password === 'femride_for_women1!') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
    } else {
      alert('Invalid password');
    }
  };

  // Check if user is already authenticated
  useEffect(() => {
    console.log('🔐 Initial authentication check');
    const isAuth = localStorage.getItem('adminAuthenticated') === 'true';
    console.log('🔐 Authentication status:', isAuth);
    setIsAuthenticated(isAuth);

    // If authenticated, load initial data with explicit initial values
    if (isAuth) {
      console.log('🔐 User authenticated, loading initial data...');
      // Load initial data with explicit parameters to avoid stale closure issues
      loadInitialData();
    }
  }, []);

  // Fetch waitlist data
  const fetchWaitlistData = async () => {
    console.log('📊 Fetching passenger waitlist data with params:', { pageSize, currentPage, verifiedOnly, searchTerm });
    setIsLoading(true);
    try {
      const result = await getWaitlist(pageSize, currentPage, verifiedOnly, searchTerm);
      console.log('📊 Passenger waitlist API result:', result);
      if (result.success) {
        setWaitlistData(result.results || []);
        setTotalCount(result.total_count || 0);
        setPageCount(result.page_count || 1);
        console.log('✅ Passenger waitlist data set:', {
          resultsCount: result.results?.length || 0,
          totalCount: result.total_count || 0
        });
      } else {
        console.error('❌ Error fetching waitlist:', result.message);
      }
    } catch (error) {
      console.error('❌ Error fetching waitlist:', error);
    } finally {
      setIsLoading(false);
    }
  };



  // Fetch driver waitlist data
  const fetchDriverWaitlistData = async () => {
    console.log('🚗 Fetching driver waitlist data with params:', { pageSize, driverCurrentPage, driverVerifiedOnly, driverSearchTerm });
    setIsDriverLoading(true);
    try {
      const result = await getDriverWaitlist(pageSize, driverCurrentPage, driverVerifiedOnly, driverSearchTerm);
      console.log('🚗 Driver waitlist API result:', result);
      if (result.success) {
        setDriverWaitlistData(result.results || []);
        setDriverTotalCount(result.total_count || 0);
        setDriverPageCount(result.page_count || 1);
        console.log('✅ Driver waitlist data set:', {
          resultsCount: result.results?.length || 0,
          totalCount: result.total_count || 0
        });
      } else {
        console.error('❌ Error fetching driver waitlist:', result.message);
      }
    } catch (error) {
      console.error('❌ Error fetching driver waitlist:', error);
    } finally {
      setIsDriverLoading(false);
    }
  };



  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDriverPageChange = (page: number) => {
    setDriverCurrentPage(page);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
    fetchWaitlistData();
  };

  const handleDriverSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setDriverCurrentPage(1); // Reset to first page when searching
    fetchDriverWaitlistData();
  };

  // Handle filter change
  const handleFilterChange = (verified: boolean) => {
    setVerifiedOnly(verified);
    setCurrentPage(1); // Reset to first page when changing filters
  };

  const handleDriverFilterChange = (verified: boolean) => {
    setDriverVerifiedOnly(verified);
    setDriverCurrentPage(1); // Reset to first page when changing filters
  };

  // Effect to refetch data when page, filter, or search changes
  useEffect(() => {
    if (isAuthenticated) {
      console.log('🔄 Passenger waitlist useEffect triggered:', { currentPage, verifiedOnly, searchTerm });
      fetchWaitlistData();
    }
  }, [currentPage, verifiedOnly, searchTerm, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      console.log('🔄 Driver waitlist useEffect triggered:', { driverCurrentPage, driverVerifiedOnly, driverSearchTerm });
      fetchDriverWaitlistData();
    }
  }, [driverCurrentPage, driverVerifiedOnly, driverSearchTerm, isAuthenticated]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
    navigate('/');
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  // Get verification link for testing
  const getVerificationLink = async (email: string, userType: 'passenger' | 'driver' = 'passenger') => {
    try {
      const result = await getVerificationTokenForTesting(email, userType);
      if (result.success && result.data) {
        const link = `${window.location.origin}${result.data.verification_link}`;
        navigator.clipboard.writeText(link);
        alert(`Verification link copied to clipboard:\n\n${link}`);
      } else {
        alert('No verification token found for this user. They may already be verified.');
      }
    } catch (error) {
      alert('Error getting verification link');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">FemRide Admin</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[#fa9de3] hover:bg-[#e989cc] text-black">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">FemRide Waitlist Admin</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="passenger-waitlist">
          <TabsList className="mb-6">
            <TabsTrigger value="passenger-waitlist">Passenger Waitlist</TabsTrigger>
            <TabsTrigger value="driver-waitlist">Driver Waitlist</TabsTrigger>
          </TabsList>

          <TabsContent value="passenger-waitlist">
            <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex gap-2">
                <Button
                  onClick={() => handleFilterChange(false)}
                  variant={verifiedOnly ? "outline" : "default"}
                  className={!verifiedOnly ? "bg-[#fa9de3] text-black" : ""}
                >
                  All Users
                </Button>
                <Button
                  onClick={() => handleFilterChange(true)}
                  variant={verifiedOnly ? "default" : "outline"}
                  className={verifiedOnly ? "bg-[#fa9de3] text-black" : ""}
                >
                  Verified Only
                </Button>
              </div>

              <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
                <Input
                  type="text"
                  placeholder="Search by email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64"
                />
                <Button type="submit" className="bg-[#a3adf4] text-black">
                  <Search size={18} />
                </Button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Original Position</TableHead>
                    <TableHead>Referral Code</TableHead>
                    <TableHead>Referred By</TableHead>
                    <TableHead>Referrals</TableHead>
                    <TableHead>Signup Date</TableHead>
                    <TableHead>Verified</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : waitlistData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8">
                        No users found
                      </TableCell>
                    </TableRow>
                  ) : (
                    waitlistData.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>{entry.email}</TableCell>
                        <TableCell>{entry.position}</TableCell>
                        <TableCell>{entry.original_position}</TableCell>
                        <TableCell>{entry.referral_code}</TableCell>
                        <TableCell>{entry.referred_by || '-'}</TableCell>
                        <TableCell>{entry.referral_count}</TableCell>
                        <TableCell>{formatDate(entry.signup_date)}</TableCell>
                        <TableCell>{entry.is_verified ? '✅' : '❌'}</TableCell>
                        <TableCell>
                          {!entry.is_verified && (
                            <Button
                              onClick={() => getVerificationLink(entry.email, 'passenger')}
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              <Mail size={12} className="mr-1" />
                              Get Link
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {totalCount > 0 && (
              <div className="mt-4 flex justify-between items-center">
                <div>
                  Showing {waitlistData.length} of {totalCount} users
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={pageCount}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </TabsContent>

          <TabsContent value="driver-waitlist">
            <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex gap-2">
                <Button
                  onClick={() => handleDriverFilterChange(false)}
                  variant={driverVerifiedOnly ? "outline" : "default"}
                  className={!driverVerifiedOnly ? "bg-[#a3adf4] text-black" : ""}
                >
                  All Drivers
                </Button>
                <Button
                  onClick={() => handleDriverFilterChange(true)}
                  variant={driverVerifiedOnly ? "default" : "outline"}
                  className={driverVerifiedOnly ? "bg-[#a3adf4] text-black" : ""}
                >
                  Verified Only
                </Button>
              </div>

              <form onSubmit={handleDriverSearch} className="flex gap-2 w-full md:w-auto">
                <Input
                  type="text"
                  placeholder="Search by email"
                  value={driverSearchTerm}
                  onChange={(e) => setDriverSearchTerm(e.target.value)}
                  className="w-full md:w-64"
                />
                <Button type="submit" className="bg-[#a3adf4] text-black">
                  <Search size={18} />
                </Button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Original Position</TableHead>
                    <TableHead>Referral Code</TableHead>
                    <TableHead>Referred By</TableHead>
                    <TableHead>Referrals</TableHead>
                    <TableHead>Signup Date</TableHead>
                    <TableHead>Verified</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isDriverLoading ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : driverWaitlistData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8">
                        No drivers found
                      </TableCell>
                    </TableRow>
                  ) : (
                    driverWaitlistData.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>{entry.email}</TableCell>
                        <TableCell>{entry.position}</TableCell>
                        <TableCell>{entry.original_position}</TableCell>
                        <TableCell>{entry.referral_code}</TableCell>
                        <TableCell>{entry.referred_by || '-'}</TableCell>
                        <TableCell>{entry.referral_count}</TableCell>
                        <TableCell>{formatDate(entry.signup_date)}</TableCell>
                        <TableCell>{entry.is_verified ? '✅' : '❌'}</TableCell>
                        <TableCell>
                          {!entry.is_verified && (
                            <Button
                              onClick={() => getVerificationLink(entry.email, 'driver')}
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              <Mail size={12} className="mr-1" />
                              Get Link
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {driverTotalCount > 0 && (
              <div className="mt-4 flex justify-between items-center">
                <div>
                  Showing {driverWaitlistData.length} of {driverTotalCount} drivers
                </div>
                <Pagination
                  currentPage={driverCurrentPage}
                  totalPages={driverPageCount}
                  onPageChange={handleDriverPageChange}
                />
              </div>
            )}
          </TabsContent>


        </Tabs>
      </main>
    </div>
  );
};

export default AdminPage;
