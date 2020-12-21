<template>
    <div class="container">
        <section v-if="Object.keys(weather).length">
            <h1>Прогноз на 5 дней</h1>
            <h3>{{ city.name }}</h3>

            <div class="weather-list">
                <div v-for="(elem, key, index) in weather" :key="index" class="weather-list__item">
                    <div class="day-title">
                        {{ new Date(elem[0].dt_txt).getDate() > 10 ? new Date(elem[0].dt_txt).getDate() : '0' + new Date(elem[0].dt_txt).getDate() }}.{{ new Date(elem[0].dt_txt).getMonth() > 10 ? new Date(elem[0].dt_txt).getMonth() : '0' + new Date(elem[0].dt_txt).getMonth() }}
                    </div>

                    <div v-for="item in elem" :key="item.dt" class="weather-list__hourly">
                        <div class="weather-list__hourly-desc">
                            <strong>{{ new Date(item.dt_txt).getHours() > 10 ? new Date(item.dt_txt).getHours() : '0' + new Date(item.dt_txt).getHours() }}:00 </strong>
                            {{ parseInt(item.main.temp) }}°
                        </div>
                        <div class="weather-list__hourly-add">
                            <div>
                                <i>Ощущается как:</i> {{ parseInt(item.main.feels_like) }}°
                            </div>
                            <div>
                                {{ item.weather[0].description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="requestSent && !Object.keys(weather).length">
            <empty-list />
            <strong @click="goToSearch" class="el-link">Вернуться к поиску</strong>
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import EmptyList from '@/components/EmptyList';

    export default {
        name: "SearchItem",
        data: () => ({

        }),
        computed: {
            ...mapState({
                weather: state => state.weather.weather,
                city: state => state.weather.city,
                requestSent: state => state.weather.requestSent,
            }),
        },
        components: {
            EmptyList,
        },
        methods: {
            goToSearch() {
                this.$store.commit('weather/toggleRequest');
                this.$router.push(`/`);
            },
        },
        mounted() {
            if(!this.requestSent) {
                this.getWeatherByCity(this.$route.params.city);
            }
        }
    }
</script>

<style scoped lang="stylus">
    .weather-list
        display flex
        flex-wrap wrap
        text-align left
        &__item
            padding 10px
        &__hourly
            margin-bottom 15px
            &-desc
                margin-bottom 7.5px
            &-add
                color grey
                font-size .75rem
    .day-title
        font-size 1.25rem
        margin-bottom 1rem
        font-weight bold
    .el-link
        color #409EFF
        text-decoration underline
</style>