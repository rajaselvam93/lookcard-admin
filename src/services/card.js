import { cardApiCall, cardTestApiCall } from "./";
const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBkMGU4NmJkNjQ3NDBjYWQyNDc1NjI4ZGEyZWM0OTZkZjUyYWRiNWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbG9va2NhcmQtZGV2ZWxvcG1lbnQiLCJhdWQiOiJsb29rY2FyZC1kZXZlbG9wbWVudCIsImF1dGhfdGltZSI6MTY5ODgyMDgxOSwidXNlcl9pZCI6ImIwSHhNTngxMGtlS1JNNXF2TlJqeVN4V1pKMzMiLCJzdWIiOiJiMEh4TU54MTBrZUtSTTVxdk5SanlTeFdaSjMzIiwiaWF0IjoxNjk4ODIwODE5LCJleHAiOjE2OTg4MjQ0MTksImVtYWlsIjoiY29ubmVjdEBtYWlsaW5hdG9yLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb25uZWN0QG1haWxpbmF0b3IuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.DvPZeJI9DlTjDkU5vJyqLzHov0vyDOlMqnBAarb6aSV76LiBbvllnB4HAAJ9oB_2S8N0cSV8b-GLBGUhmMXZijSS0IT2a16NxqpHZef3gHyL1FxIwgKqfi8Shxa-kakc-Hocv5yOBY6_pkqtJNBqIbKH6Xe5Iplzw0EOmaGZ-Q2MUc3hGL9H22qIpEVYeIy1a198Rv_w7CgibfM875Cp5R0i2sX7L_Q71R5BJhiSkS__xj7HNlSJuYwqR93uq3-eWT9sgSxPZBDwhfFiPkYyN7-pgdk9guBV_zvaHRTNqkerMTDMMHi1-t87P9TG9HtneJ66WH55CKJWLnh3OLQfDA';
const headerAuth = { headers: { authorization: "Bearer:" + " " + token } };

export const kycuserlist = async (req) => {
    try {
        const res = await cardTestApiCall.get('/card-requests', req, headerAuth);
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
        const res = await cardTestApiCall.post('/approve-card-request', req);
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