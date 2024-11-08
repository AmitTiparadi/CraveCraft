

import axios from 'axios';

export const checkSession = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/check-session', { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error checking session:', error);
    return { isAuthenticated: false };
  }
};
