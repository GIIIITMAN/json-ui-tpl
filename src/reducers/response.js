import { GET_REQUEST, POST_REQUEST } from '../actions/httpRequest';

export default (state, action) => {
    switch (action.type) {
        case GET_REQUEST:
            console.log("GET Response: ", action.data);
            break;
        case POST_REQUEST:
            console.log("POST Response: ", action.data);
            break;
        default:
    }
    
    return state || { count: 0 };
}