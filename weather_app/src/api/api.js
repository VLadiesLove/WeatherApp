import Axios from "axios";

const instance = Axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});

const weatherAPI = {
  getWeather(city) {
    return instance.get(
      `weather?appid=ae92a03bc0c3804f810c06eca740c621&q=${city}&lang=ru`
    );
  },
};

export default weatherAPI;