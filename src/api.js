import axios from 'axios'

const BASE_URL = 'http://localhost'
const PORT = 3002
const getAllCars = () => axios.get(`${BASE_URL}:${PORT}/cars`)
const getCarByMaker = (maker) =>{
    const data = JSON.stringify({
        maker
    });

    var config = {
        method: 'post',
        url: 'http://localhost:3002/getSpecificMaker',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)
}
export default { getAllCars, getCarByMaker }


