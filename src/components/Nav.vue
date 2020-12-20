<template>
    <section class="navigation">
        <div>
            <router-link
                to="/"
                class="router-link"
            >
                <span @click="$store.commit('weather/toggleRequest', false)">Поиск</span>
            </router-link>
            <router-link
                to="/about"
                class="router-link"
            >
                О проекте
            </router-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Nav",
    }
</script>

<style scoped lang="stylus">
    .navigation
        background #409EFF
        padding 15px
        text-align left
    .router-link
        color #fff
        display inline-block
        margin-right 15px
        text-decoration none
    .router-link-exact-active
        font-weight bold
</style>