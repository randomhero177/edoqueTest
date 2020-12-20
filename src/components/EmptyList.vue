<template>
    <div>
        <h4>По вашему запросу ничего не найдено : (</h4>
        <div>
            <img src="https://i1.sndcdn.com/artworks-000014769593-i0twd7-t500x500.jpg" alt="">
        </div>
        <p>{{ error.message }}</p>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "EmptyList",
        computed: {
            ...mapState({
                error: state => state.weather.error,
            }),
        },
    }
</script>

<style scoped>

</style>