import Axios from "axios";

const CARD_URL="https://dev.lookcard.io/api/v1/card-fPqIXgqIP3s5/"

// console.log("process.env",CARD_URL);
export const cardApiCall = Axios.create({
    baseURL: CARD_URL
});