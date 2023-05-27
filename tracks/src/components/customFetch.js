import axios from "axios";
const customFetch = axios.create({
  baseURL: "https://1fc1-197-232-61-236.ngrok-free.app/api/v1",
});
export default customFetch;
