const API_BASE_URL = "api.thegrail.app";
// const API_BASE_URL = "http://52.90.200.142:8088";

const fetchAPI = async (endpoint:string, options:RequestInit) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    const errorDetail = await response.json();
    throw new Error(errorDetail.detail || "An error occurred");
  }
  return response.json();
};

export { fetchAPI };
