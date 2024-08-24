import { setAccessToken } from "../redux/slice/UserSlice";
import { axiosInstance } from "./axiosInstance";

function refreshToken(dispatch, refreshToken) {

    
    axiosInstance
    .post("core/token/refresh/", {
        refresh: refreshToken
    })
    .then(function (response) {
        dispatch(setAccessToken(response.data.access))
    })
    .catch(function (error) {
        if (error.response.status) {
            dispatch(setAccessToken(""))
        }
    });

}

export default refreshToken
