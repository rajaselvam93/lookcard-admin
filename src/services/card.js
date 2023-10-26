import { cardApiCall } from "./";

export const kycuserlist = async (req) => {
    try {
        const res = await cardApiCall.get('/card-requests', req);
        if (res.status === 200 || res.status === 201) {
            return res;
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
};

export const applicationReject = async (req) => {
    try {
        const res = await cardApiCall.post('/update-card-status', req);
        if (res.status === 200 || res.status === 201) {
            return res;
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
};

export const applicationApproved = async (req) => {
    try {
        const res = await cardApiCall.post('/approve-card-request', req);
        if (res.status === 200 || res.status === 201) {
            return res;
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
};