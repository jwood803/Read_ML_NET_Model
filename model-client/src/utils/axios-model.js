import axios from "axios";

const instance = axios.create({
  baseURL: "https://modelpredictionapi.azurewebsites.net/api/model"
});

export default instance;