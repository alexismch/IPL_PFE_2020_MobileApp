import axios from "axios";

const sendPostData = (data: object) => {
    axios
        .post('https://cors-anywhere.herokuapp.com/https://ipl-pfe-2020-dev.herokuapp.com/api/qrcodes/scan', data)
        .then(response => {
            console.log(response.data)
        })
    console.log("yo")
}

export default sendPostData;