import axios from "axios";
require("dotenv").config();

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    const apiUrl = process.env.REACT_APP_API_URL || "https://dungeon-adv-be.herokuapp.com";

    return axios.create({
        baseURL: apiUrl,
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    });
};

export default axiosWithAuth;
