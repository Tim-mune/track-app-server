import axios from "axios";
const customFetch = axios.create({
  baseURL: "https://5641-197-232-61-213.ngrok-free.app/api/v1",
});
export default customFetch;
