import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DebugPanel: React.FC = () => {
  const [testResults, setTestResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [testEmail, setTestEmail] = useState('test@example.com');

  const testVercelAPI = async () => {
    setLoading(true);
    try {
      console.log('🧪 Testing Vercel API...');
      const response = await fetch('/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test: 'data' }),
      });

      const result = await response.json();
      console.log('🧪 Test API result:', result);
      setTestResults(result);
    } catch (error) {
      console.error('❌ Test API error:', error);
      setTestResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const testEmailAPI = async () => {
    setLoading(true);
    try {
      console.log('📧 Testing Email API...');
      const response = await fetch('/api/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: testEmail,
          verificationToken: 'test-token-123',
          baseUrl: window.location.origin,
          userType: 'passenger'
        }),
      });

      const result = await response.json();
      console.log('📧 Email API result:', result);
      setTestResults(result);
    } catch (error) {
      console.error('❌ Email API error:', error);
      setTestResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const testDriverRegistration = async () => {
    setLoading(true);
    try {
      console.log('🚗 Testing Driver Registration...');
      const { addToWaitingList } = await import('@/lib/supabase');

      // Use a unique email for testing
      const uniqueEmail = `test.driver.${Date.now()}@example.com`;
      const result = await addToWaitingList(uniqueEmail, null, 'driver');
      console.log('🚗 Driver registration result:', result);
      setTestResults(result);
    } catch (error) {
      console.error('❌ Driver registration error:', error);
      setTestResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const testDriverFunction = async () => {
    setLoading(true);
    try {
      console.log('🧪 Testing Driver Function Directly...');
      const { supabase } = await import('@/lib/supabase');

      const { data, error } = await supabase.rpc('test_driver_function');
      console.log('🧪 Direct function test result:', { data, error });
      setTestResults({ data, error, type: 'direct_function_test' });
    } catch (error) {
      console.error('❌ Direct function test error:', error);
      setTestResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const debugDriverVerification = async () => {
    setLoading(true);
    try {
      console.log('🔍 Debug Driver Verification...');
      const { supabase } = await import('@/lib/supabase');

      // Use the test email and token from the database
      const { data, error } = await supabase.rpc('debug_driver_verification', {
        email_param: 'test.verification.fix@example.com',
        token_param: 'ki3xzxnPEegcXDSx8lpAOOukKDluxDot'
      });
      console.log('🔍 Debug result:', { data, error });
      setTestResults({ data, error, type: 'debug_verification' });
    } catch (error) {
      console.error('❌ Debug verification error:', error);
      setTestResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const testPassengerRegistration = async () => {
    setLoading(true);
    try {
      console.log('🚙 Testing Passenger Registration...');
      const { addToWaitingList } = await import('@/lib/supabase');

      // Use a unique email for testing
      const uniqueEmail = `test.passenger.${Date.now()}@example.com`;
      const result = await addToWaitingList(uniqueEmail, null, 'passenger');
      console.log('🚙 Passenger registration result:', result);
      setTestResults(result);
    } catch (error) {
      console.error('❌ Passenger registration error:', error);
      setTestResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  // Only show in development or if admin email is set
  const isAdmin = import.meta.env.VITE_ADMIN_EMAIL && 
    window.location.search.includes('debug=true');

  if (!isAdmin && !import.meta.env.DEV) {
    return null;
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 z-50 bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-sm">🔧 Debug Panel</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Button 
            onClick={testVercelAPI} 
            disabled={loading}
            className="w-full text-xs"
          >
            {loading ? 'Testing...' : 'Test Vercel API'}
          </Button>
          
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Test email"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              className="text-xs"
            />
            <Button
              onClick={testEmailAPI}
              disabled={loading}
              className="text-xs"
            >
              Test Email
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={testPassengerRegistration}
              disabled={loading}
              className="text-xs bg-blue-500 hover:bg-blue-600"
            >
              Test Passenger
            </Button>
            <Button
              onClick={testDriverRegistration}
              disabled={loading}
              className="text-xs bg-green-500 hover:bg-green-600"
            >
              Test Driver
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={testDriverFunction}
              disabled={loading}
              className="text-xs bg-purple-500 hover:bg-purple-600"
            >
              Test Driver Function
            </Button>
            <Button
              onClick={debugDriverVerification}
              disabled={loading}
              className="text-xs bg-orange-500 hover:bg-orange-600"
            >
              Debug Driver Verify
            </Button>
          </div>
        </div>

        {testResults && (
          <div className="bg-gray-100 p-2 rounded text-xs max-h-40 overflow-auto">
            <pre>{JSON.stringify(testResults, null, 2)}</pre>
          </div>
        )}

        <div className="text-xs text-gray-500">
          <div>Env: {import.meta.env.DEV ? 'Dev' : 'Prod'}</div>
          <div>URL: {window.location.origin}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DebugPanel;
