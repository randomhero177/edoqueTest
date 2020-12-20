import axios from 'axios'

const apiKey = 'ca64c2452c27ed46f96a96f509b60794';
const url = `http://api.openweathermap.org/data/2.5/forecast`;

export default {
  getWeatherByCity(city) {
    return axios.get(`${url}?q=${city}&appid=${apiKey}&units=metric`).then(responce => responce).catch(err => {
      console.error('Error: ' + err.response.data.message)
      return err.response
    });
  },
}