import axios from "axios";

export const API_URL = "http://localhost:8000";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const paymentsApi = {
  async pay(dataRes: any) {
    const { data } = await api.post(
      `${API_URL}/payments/save-stripe-info/`,
      dataRes,
    );

    return data;
  },
};
