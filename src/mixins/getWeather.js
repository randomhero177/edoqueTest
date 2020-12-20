import Vue from 'vue';
import Api from '@/services/api'

const url = {
    methods: {
        /*
        * Метод добавления в урл query параметров.
        * Значения свойств приводим к строке что бы исключить ложный $router.push
        *
        * @param {Object} param - Обьект с параметрами
        */
        getWeatherByCity(city) {
            return Api.getWeatherByCity(city).then((data) => {
                this.loading = false;
                this.$store.commit('weather/toggleRequest');
                if(data.status === 200) {
                    const manualData = {};
                    data.data.list.forEach((elem) => {
                        const date = new Date(elem.dt_txt);

                        if (!(date.getDate() in manualData)){
                            manualData[date.getDate()] = []
                        }

                        manualData[date.getDate()].push(elem)

                    })
                    this.$store.commit('weather/setWeather', manualData);
                    this.$store.commit('weather/setCity', data.data.city);
                } else {
                    this.$store.commit('weather/setError', data.data);
                }
            })
        },
    },
};

Vue.mixin(url);
