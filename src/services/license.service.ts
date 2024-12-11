import { fetchAPI } from '../utils/api';

export const getLicenseByUser = async (user_email: string) => {
  try {
    return await fetchAPI(
      `/subscriptions/available-licenses?user_email=${user_email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        }
      }
    );
  } catch (error) {
    console.error("Error fetching available licenses", error);
  }
}