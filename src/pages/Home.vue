<template>
    <div>
        <search />
        <empty-list v-if="requestSent && !Object.keys(weather).length"/>
    </div>
</template>

<script>
    import Search from '@/components/Search';
    import EmptyList from '@/components/EmptyList';
    import {mapState} from "vuex";

    export default {
        name: "Home",
        components: {
            Search, EmptyList
        },
        computed: {
            ...mapState({
                weather: state => state.weather.weather,
                requestSent: state => state.weather.requestSent
            }),
        }
    }
</script>

<style scoped>

</style>