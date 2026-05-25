// Testing Templates for Pocket Ranger
// Copy these patterns for all component tests

/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
import { Alert } from 'react-native';

// Mock setup
beforeEach(() => {
  jest.clearAllMocks();
  global.fetch = jest.fn();
});

// Mock helper
global.mockFetch = (response, ok = true) => {
  fetch.mockResolvedValueOnce({
    ok,
    json: async () => response,
    text: async () => JSON.stringify(response),
    status: ok ? 200 : 400,
  });
};

// Component Test Template
describe('ComponentName', () => {
  const mockSuccessResponse = {
    name: "Test Adventure",
    activity: "hiking",
    city: "Test City, ST",
    description: "Test description",
    schedule: [
      {
        time: "8:00 AM",
        activity: "Test Activity",
        location: "Test Location",
        partnerLink: "https://example.com",
        partnerName: "TestPartner"
      }
    ]
  };

  test('renders correctly with initial state', () => {
    render(<ComponentName />);
    
    expect(screen.getByText('Expected Text')).toBeTruthy();
    expect(screen.getByPlaceholderText('Expected Placeholder')).toBeTruthy();
  });

  test('handles user interaction', async () => {
    render(<ComponentName />);
    
    const button = screen.getByText('Button Text');
    fireEvent.press(button);
    
    await waitFor(() => {
      expect(screen.getByText('Expected Result')).toBeTruthy();
    });
  });

  test('handles API success', async () => {
    mockFetch(mockSuccessResponse);
    
    render(<ComponentName />);
    
    const input = screen.getByPlaceholderText('Input Placeholder');
    const button = screen.getByText('Submit Button');
    
    fireEvent.changeText(input, 'test input');
    fireEvent.press(button);
    
    await waitFor(() => {
      expect(screen.getByText('Test Adventure')).toBeTruthy();
    });
  });

  test('handles API error', async () => {
    const mockAlert = jest.spyOn(Alert, 'alert');
    fetch.mockRejectedValueOnce(new Error('Network error'));
    
    render(<ComponentName />);
    
    const button = screen.getByText('Submit Button');
    fireEvent.press(button);
    
    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith(
        'Error',
        'Expected error message'
      );
    });
  });

  test('validates input', () => {
    const mockAlert = jest.spyOn(Alert, 'alert');
    
    render(<ComponentName />);
    
    const button = screen.getByText('Submit Button');
    fireEvent.press(button);
    
    expect(mockAlert).toHaveBeenCalledWith(
      'Input Required',
      'Expected validation message'
    );
  });

  test('handles loading state', async () => {
    // Mock slow response
    fetch.mockImplementation(() => 
      new Promise(resolve => 
        setTimeout(() => resolve({
          ok: true,
          json: async () => mockSuccessResponse
        }), 100)
      )
    );
    
    render(<ComponentName />);
    
    const button = screen.getByText('Submit Button');
    fireEvent.press(button);
    
    expect(screen.getByText('Loading...')).toBeTruthy();
  });
});

// API Test Template
describe('API Endpoint', () => {
  test('should return success response', async () => {
    const request = new Request('http://localhost:8081/api/endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userInput: 'test input' })
    });

    const response = await POST(request);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty('expectedProperty');
  });

  test('should handle invalid input', async () => {
    const request = new Request('http://localhost:8081/api/endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userInput: '' })
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data).toHaveProperty('error');
  });

  test('should include CORS headers', async () => {
    const request = new Request('http://localhost:8081/api/endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userInput: 'test' })
    });

    const response = await POST(request);
    
    expect(response.headers.get('Access-Control-Allow-Origin')).toBe('*');
    expect(response.headers.get('Access-Control-Allow-Methods')).toBe('POST, OPTIONS');
  });
});

// Integration Test Template
describe('Integration Tests', () => {
  test('complete user flow', async () => {
    mockFetch(mockSuccessResponse);
    
    render(<App />);
    
    // Step 1: User input
    const input = screen.getByPlaceholderText('Input placeholder');
    fireEvent.changeText(input, 'test input');
    
    // Step 2: Submit
    const button = screen.getByText('Submit');
    fireEvent.press(button);
    
    // Step 3: Verify result
    await waitFor(() => {
      expect(screen.getByText('Expected Result')).toBeTruthy();
    });
    
    // Step 4: Navigate
    const navButton = screen.getByText('Navigate');
    fireEvent.press(navButton);
    
    // Step 5: Verify navigation
    await waitFor(() => {
      expect(screen.getByText('New Screen Content')).toBeTruthy();
    });
  });
});

// Test Utilities
const renderWithProviders = (component) => {
  return render(
    <NavigationContainer>
      {component}
    </NavigationContainer>
  );
};

const waitForLoadingToFinish = async () => {
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).toBeFalsy();
  });
};