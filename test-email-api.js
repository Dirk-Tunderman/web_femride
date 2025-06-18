// Test script to debug email API
import fetch from 'node-fetch';

const testEmailAPI = async () => {
  try {
    console.log('🧪 Testing email API...');
    
    const response = await fetch('http://localhost:3001/api/send-verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'team@veloxforce.ai',
        verificationToken: 'test-token-123',
        baseUrl: 'http://localhost:8081',
        userType: 'passenger'
      }),
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));
    
    const text = await response.text();
    console.log('📡 Raw response text:', text);
    
    try {
      const json = JSON.parse(text);
      console.log('📡 Parsed JSON:', json);
    } catch (parseError) {
      console.error('❌ Failed to parse JSON:', parseError.message);
      console.error('❌ Raw text was:', text);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
};

testEmailAPI();
