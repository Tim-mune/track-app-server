import axios from "axios";
const customFetch = axios.create({
  baseURL: "https://e878-197-232-61-231.ngrok-free.app /api/v1",
});
export default customFetch;
