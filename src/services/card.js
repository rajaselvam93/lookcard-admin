import { cardApiCall, cardTestApiCall } from "./";

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

export const kycuserdata = async (req) => {
    console.log("reqqqqqq", req);
    try {
        const res = await cardTestApiCall.post('/card-details-web', req);
        if (res.status === 200 || res.status === 201) {
            return res;
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
};

export const exportpdf = async (req) => {
    console.log("reqqqqqq", req);
    try {
        const res = await cardTestApiCall.post('/export-card-list-as-pdf', req);
        if (res.status === 200 || res.status === 201) {
            return res;
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
};

export const exportexcel = async (req) => {
    console.log("reqqqqqq", req);
    try {
        const res = await cardTestApiCall.post('/export-card-list-as-excel', req);
        if (res.status === 200 || res.status === 201) {
            return res;
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
};

export const kycusersbulkupdate = async (req) => {
    console.log("reqqqqqq", req);
    try {
        const res = await cardTestApiCall.post('/update-card-status-bulk', req);
        if (res.status === 200 || res.status === 201) {
            return res;
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
};