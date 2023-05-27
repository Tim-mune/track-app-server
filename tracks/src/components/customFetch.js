import axios from "axios";
const customFetch = axios.create({
  baseURL: "https://6d11-197-232-61-237.ngrok-free.app/api/v1",
});
export default customFetch;
