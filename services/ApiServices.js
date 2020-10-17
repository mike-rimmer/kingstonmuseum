// import axios from "axios";
// Note for production version 
const axios = require("axios").default;
const AxiosApi = axios.create({
  // Change baseUrl to rimike.ca for Production 
  // baseURL: "https:/rimike.ca/serve",
  baseURL: "http://localhost/serve",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

console.log("Mike");
export default {
  getStories() {
    return AxiosApi.get(
      "/api/veterans/read.php?" + new URLSearchParams({ status: "A" })
    );
  },

  getPhotos(key) {
    return AxiosApi.get(
      "/api/photos/read.php?" + new URLSearchParams({ id: key, status: "A" })
    );
  },

  getPendingStories() {
    return AxiosApi.get(
      "/api/veterans/read.php?" + new URLSearchParams({ status: "P" })
    );
  },

  getPendingPhotos(key) {
    return AxiosApi.get(
      "/api/photos/read.php?" + new URLSearchParams({ status: "P", id: key })
    );
  },

  // When using axios
  updatePendingPhotos(payload) {
    return AxiosApi.post("/api/photos/update.php", payload);
  },

  updateVeteranStory(payload) {
    return AxiosApi.post("/api/veterans/update.php", payload);
  },

  postEmail(payload) {
    return AxiosApi.post("api/mail/email.php", payload);
  },

  savePhotosToServer(payload){
    return AxiosApi.post("api/veterans/uploadphotos.php", payload,
    {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
  },

  savePhotos2DB(payload){
    return AxiosApi.post("api/veterans/create.php", payload)
  },

  

  saveStoryToServer(payload){
    return AxiosApi.post("api/veterans/create.php", payload)
  }
};
