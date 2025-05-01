import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000", // Ensure no extra space in the URL
});

// Adding request interceptor
Api.interceptors.request.use((config) => {
    // Modify config before sending the request
    console.log("Request Intercepted:", config);
    return config; // Return the modified config
}, (error) => {
    // Handle errors properly
    return Promise.reject(error);
});

// Adding response interceptor
Api.interceptors.response.use((response) => {
    console.log("Response Intercepted:", response);
    return response; // Ensure the response is returned properly
}, (error) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
});

export default Api;
