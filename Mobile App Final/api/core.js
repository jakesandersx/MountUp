import axios, {AxiosInstance} from 'axios';

const instance = axios.create({
    baseURL: "http://10.3.0.93:7000", // Real life uses system variables to quickly switch b/t dev and production
    withCredentials: true
});

//Takes data from server b/f it enters main code
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response.status;

        //Error messages normally shown in toasts
        switch(status){
            case 400:
                console.log("Error: ", error.response.data.message);
                break;
            case 401:
                console.log("Error: ", error.response.data.message);
                //Where you would remove redux values in persist redux and redirect to login
                break;
            case 404:
                console.log("Error: ", error.response.data.message);
                break;
            case 500:
                console.log("Error: ", error.response.data.message);
                break;
            default:
                console.log("Got an unexpected status code");
                break;
        }
    }
);

export default instance;
