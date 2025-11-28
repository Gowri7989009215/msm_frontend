// API Configuration
// Base URL comes from environment variable (Vite)
const API_BASE_URL = "https://msm-backend-shmo.onrender.com";

// Export the base URL
export const BASE_URL = API_BASE_URL;

// Export Socket.IO URL (same as API base URL)
export const SOCKET_URL = API_BASE_URL;

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  LOGIN: `${API_BASE_URL}/login`,
  SIGNUP: `${API_BASE_URL}/signup`,
  
  // User
  USER_BY_EMAIL: (email) => `${API_BASE_URL}/user/${email}`,
  USER_BY_USERNAME: (username) => `${API_BASE_URL}/user/by-username/${username}`,
  UPDATE_USER: (email) => `${API_BASE_URL}/user/${email}`,
  
  // Posts
  POSTS: `${API_BASE_URL}/posts`,
  POSTS_BY_USER: (email) => `${API_BASE_URL}/posts/user/${email}`,
  POSTS_FRIENDS: `${API_BASE_URL}/posts/friends`,
  POST_LIKE: (postId) => `${API_BASE_URL}/posts/${postId}/like`,
  POST_COMMENT: (postId) => `${API_BASE_URL}/posts/${postId}/comment`,
  
  // Friends
  FRIENDS: (email) => `${API_BASE_URL}/friends/${email}`,
  FRIENDS_REQUESTS: (email) => `${API_BASE_URL}/friends/requests/${email}`,
  FRIENDS_REQUEST: `${API_BASE_URL}/friends/request`,
  FRIENDS_ACCEPT: `${API_BASE_URL}/friends/accept`,
  FRIENDS_DECLINE: `${API_BASE_URL}/friends/decline`,
  CONNECTIONS: (email) => `${API_BASE_URL}/connections/${email}`,
  
  // Messages
  MESSAGES: `${API_BASE_URL}/messages`,
  MESSAGES_BETWEEN: (email1, email2) => `${API_BASE_URL}/messages/${email1}/${email2}`,
  MESSAGES_CONVERSATIONS: (email) => `${API_BASE_URL}/api/messages/conversations/${email}`,
  MESSAGES_GET: (email1, email2) => `${API_BASE_URL}/api/messages/messages/${email1}/${email2}`,
  MESSAGES_SEND: `${API_BASE_URL}/api/messages/send`,
  MESSAGES_MARK_READ: `${API_BASE_URL}/api/messages/mark-read`,
  
  // Search
  SEARCH: `${API_BASE_URL}/api/search`,
  
  // Demo (if needed)
  DEMO: `${API_BASE_URL}/api/demo`,
  
  // Password Reset
  FORGOT_PASSWORD: `${API_BASE_URL}/forgot-password`,
  VERIFY_OTP: `${API_BASE_URL}/verify-otp`,
  RESET_PASSWORD: `${API_BASE_URL}/reset-password`,
};

export default API_ENDPOINTS;
