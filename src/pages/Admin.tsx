import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWaitlist, getReferralStats, getVerificationTokenForTesting, getDriverWaitlist, getDriverReferralStats } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination } from '@/components/ui/admin-pagination';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

interface ReferralStats {
  total_users: number;
  total_referrals: number;
  verified_referrals: number;
  conversion_rate: number;
  top_referrers: {
    id: number;
    email: string;
    referral_count: number;
  }[];
}

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  // Passenger waitlist state
  const [waitlistData, setWaitlistData] = useState<WaitlistEntry[]>([]);
  const [referralStats, setReferralStats] = useState<ReferralStats | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Driver waitlist state
  const [driverWaitlistData, setDriverWaitlistData] = useState<WaitlistEntry[]>([]);
  const [driverReferralStats, setDriverReferralStats] = useState<ReferralStats | null>(null);
  const [driverTotalCount, setDriverTotalCount] = useState<number>(0);
  const [driverCurrentPage, setDriverCurrentPage] = useState<number>(1);
  const [driverPageCount, setDriverPageCount] = useState<number>(1);
  const [driverSearchTerm, setDriverSearchTerm] = useState<string>('');
  const [driverVerifiedOnly, setDriverVerifiedOnly] = useState<boolean>(false);
  const [isDriverLoading, setIsDriverLoading] = useState<boolean>(false);

  const pageSize = 10;
  const navigate = useNavigate();

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
    const isAuth = localStorage.getItem('adminAuthenticated') === 'true';
    setIsAuthenticated(isAuth);

    // If authenticated, load initial data
    if (isAuth) {
      fetchWaitlistData();
      fetchReferralStats();
      fetchDriverWaitlistData();
      fetchDriverReferralStats();
    }
  }, []);

  // Fetch waitlist data
  const fetchWaitlistData = async () => {
    setIsLoading(true);
    try {
      const result = await getWaitlist(pageSize, currentPage, verifiedOnly, searchTerm);
      if (result.success) {
        setWaitlistData(result.results || []);
        setTotalCount(result.total_count || 0);
        setPageCount(result.page_count || 1);
      } else {
        console.error('Error fetching waitlist:', result.message);
      }
    } catch (error) {
      console.error('Error fetching waitlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch referral statistics
  const fetchReferralStats = async () => {
    try {
      const result = await getReferralStats();
      if (result.success) {
        setReferralStats({
          total_users: result.total_users || 0,
          total_referrals: result.total_referrals || 0,
          verified_referrals: result.verified_referrals || 0,
          conversion_rate: result.conversion_rate || 0,
          top_referrers: result.top_referrers || []
        });
      } else {
        console.error('Error fetching referral stats:', result.message);
      }
    } catch (error) {
      console.error('Error fetching referral stats:', error);
    }
  };

  // Fetch driver waitlist data
  const fetchDriverWaitlistData = async () => {
    setIsDriverLoading(true);
    try {
      const result = await getDriverWaitlist(pageSize, driverCurrentPage, driverVerifiedOnly, driverSearchTerm);
      if (result.success) {
        setDriverWaitlistData(result.results || []);
        setDriverTotalCount(result.total_count || 0);
        setDriverPageCount(result.page_count || 1);
      } else {
        console.error('Error fetching driver waitlist:', result.message);
      }
    } catch (error) {
      console.error('Error fetching driver waitlist:', error);
    } finally {
      setIsDriverLoading(false);
    }
  };

  // Fetch driver referral statistics
  const fetchDriverReferralStats = async () => {
    try {
      const result = await getDriverReferralStats();
      if (result.success) {
        setDriverReferralStats({
          total_users: result.total_users || 0,
          total_referrals: result.total_referrals || 0,
          verified_referrals: result.verified_referrals || 0,
          conversion_rate: result.conversion_rate || 0,
          top_referrers: result.top_referrers || []
        });
      } else {
        console.error('Error fetching driver referral stats:', result.message);
      }
    } catch (error) {
      console.error('Error fetching driver referral stats:', error);
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
      fetchWaitlistData();
    }
  }, [currentPage, verifiedOnly]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchDriverWaitlistData();
    }
  }, [driverCurrentPage, driverVerifiedOnly]);

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
            <TabsTrigger value="passenger-stats">Passenger Stats</TabsTrigger>
            <TabsTrigger value="driver-stats">Driver Stats</TabsTrigger>
            <TabsTrigger value="email-test">Email Test</TabsTrigger>
            <TabsTrigger value="popup-test">Popup Test</TabsTrigger>
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

          <TabsContent value="passenger-stats">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Passenger Statistics</h2>
              <p className="text-gray-600">Referral bonus: +10 places for drivers, +2 places for passengers</p>
            </div>
            {referralStats ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Total Passengers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{referralStats.total_users}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Total Referrals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{referralStats.total_referrals}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Verified Referrals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{referralStats.verified_referrals}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Conversion Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{referralStats.conversion_rate.toFixed(1)}%</div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-8">Loading passenger statistics...</div>
            )}

            {referralStats && referralStats.top_referrers.length > 0 && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold">Top Passenger Referrers</h3>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Referrals</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {referralStats.top_referrers.map((referrer) => (
                      <TableRow key={referrer.id}>
                        <TableCell>{referrer.email}</TableCell>
                        <TableCell>{referrer.referral_count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </TabsContent>

          <TabsContent value="driver-stats">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Driver Statistics</h2>
              <p className="text-gray-600">Referral bonus: +10 places for drivers, +2 places for passengers</p>
            </div>
            {driverReferralStats ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Total Drivers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{driverReferralStats.total_users}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Total Referrals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{driverReferralStats.total_referrals}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Verified Referrals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{driverReferralStats.verified_referrals}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Conversion Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{driverReferralStats.conversion_rate.toFixed(1)}%</div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-8">Loading driver statistics...</div>
            )}

            {driverReferralStats && driverReferralStats.top_referrers.length > 0 && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold">Top Driver Referrers</h3>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Referrals</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {driverReferralStats.top_referrers.map((referrer) => (
                      <TableRow key={referrer.id}>
                        <TableCell>{referrer.email}</TableCell>
                        <TableCell>{referrer.referral_count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </TabsContent>

          <TabsContent value="email-test">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Email System Test</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Email Server Status</h4>
                  <p className="text-sm text-blue-700">
                    Email server should be running on port 3001. Check the console for server status.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">How to Test Email Verification</h4>
                  <ol className="text-sm text-green-700 space-y-1 list-decimal list-inside">
                    <li>Make sure the email server is running (npm run server)</li>
                    <li>Sign up with your real email address on the main page</li>
                    <li>Check your email inbox for verification email from Resend</li>
                    <li>Click the verification button in the email</li>
                    <li>Return to this admin panel to see the user marked as verified</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Development Fallback</h4>
                  <p className="text-sm text-yellow-700">
                    If the email server is not running, the system will show an alert with the verification link for testing.
                    You can also use the "Get Link" button in the waitlist tab for unverified users.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Email Configuration</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p><strong>Service:</strong> Resend</p>
                    <p><strong>From Address:</strong> FemRide &lt;noreply@notifications.femride.de&gt;</p>
                    <p><strong>Domain Status:</strong> Verified ✅</p>
                    <p><strong>API Key:</strong> Configured ✅ (server-side)</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="popup-test">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Exit-Intent Popup Test</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Current Status</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p><strong>Popup Shown:</strong> {sessionStorage.getItem('waitlistPopupShown') === 'true' ? '✅ Yes' : '❌ No'}</p>
                    <p><strong>User Signed Up:</strong> {localStorage.getItem('femrideSignedUp') === 'true' ? '✅ Yes' : '❌ No'}</p>
                    <p><strong>Popup Enabled:</strong> {(sessionStorage.getItem('waitlistPopupShown') !== 'true' && localStorage.getItem('femrideSignedUp') !== 'true') ? '✅ Yes' : '❌ No (Disabled)'}</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">How Exit-Intent Popup Works</h4>
                  <ol className="text-sm text-green-700 space-y-1 list-decimal list-inside">
                    <li><strong>Desktop:</strong> Move mouse to top of browser window (exit intent)</li>
                    <li><strong>Mobile:</strong> Scroll down 50% of the page</li>
                    <li><strong>Delay:</strong> 4 seconds after page load before detection starts</li>
                    <li><strong>Once per session:</strong> Only shows once per browser session</li>
                    <li><strong>Disabled after signup:</strong> Never shows again after user signs up</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Test Controls</h4>
                  <div className="space-y-2">
                    <Button
                      onClick={() => {
                        sessionStorage.removeItem('waitlistPopupShown');
                        localStorage.removeItem('femrideSignedUp');
                        window.location.reload();
                      }}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white mr-2"
                    >
                      Reset All & Reload
                    </Button>
                    <Button
                      onClick={() => {
                        sessionStorage.removeItem('waitlistPopupShown');
                        window.location.reload();
                      }}
                      variant="outline"
                      className="mr-2"
                    >
                      Reset Popup Only
                    </Button>
                    <Button
                      onClick={() => {
                        localStorage.removeItem('femrideSignedUp');
                        window.location.reload();
                      }}
                      variant="outline"
                    >
                      Reset Signup Status
                    </Button>
                  </div>
                  <p className="text-xs text-yellow-600 mt-2">
                    Use these buttons to test different popup scenarios. Page will reload after reset.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Testing Steps</h4>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Click "Reset All & Reload" to start fresh</li>
                    <li>Go to homepage and wait 4 seconds</li>
                    <li>Move mouse to top of browser (desktop) or scroll down 50% (mobile)</li>
                    <li>Popup should appear</li>
                    <li>Sign up through the popup</li>
                    <li>Try triggering popup again - it should NOT appear</li>
                    <li>Check this tab to see status updated</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPage;
