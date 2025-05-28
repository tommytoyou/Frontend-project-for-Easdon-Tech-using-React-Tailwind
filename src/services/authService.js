import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/login';

// Login user
const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem('token');
};

// Export service functions
const authService = {
  login,
  logout,
};

export default authService;
