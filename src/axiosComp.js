import axios from "axios";

const instance= axios.create({
    baseURL:"https://portfolio-88dae.firebaseio.com/"
});


export default instance;