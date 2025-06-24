export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ROUTES = {
  VERIFY_EMAIL: `${API_BASE_URL}/auth/verify-email`,
  REFRESH_TOKEN: `${API_BASE_URL}/auth/refresh`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  RESUME_UPLOAD: `${API_BASE_URL}/resume/upload`,
  RESUME_RESULTS: `${API_BASE_URL}/resume/results`,
  RESUME_SCORES: `${API_BASE_URL}/resume/scores`,
  HEALTH_CHECK: `${API_BASE_URL}/health`,
};
