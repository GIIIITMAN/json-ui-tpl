export const GET_REQUEST = "GET_REQUEST";
export const POST_REQUEST = "POST_REQUEST";

export const doGet = (payload) => {
    return {
        type: GET_REQUEST,
        ...payload
    }
}

export const doPost = (payload) => {
    return {
        type: POST_REQUEST,
        ...payload
    }
}