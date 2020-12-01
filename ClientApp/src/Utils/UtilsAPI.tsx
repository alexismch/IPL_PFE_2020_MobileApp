import axios from "axios";

const sendPostData = (data: object) => {
    axios
        .post('https://cors-anywhere.herokuapp.com/https://ipl-pfe-2020-dev.herokuapp.com/api/qrcode', data)
        .then(response => {
            console.log(response.data)
        })
}

export default sendPostData;