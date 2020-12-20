<template>
    <div v-loading="loading">
        <div>
            <h2>Прогноз погоды по городу </h2>
        </div>
        <el-form @submit.native.prevent="submit" v-model="form" :inline="true">
            <el-form-item>
                <el-input v-model="city" placeholder="Введите город"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">Поиск</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data: () => ({
            city: '',
            loading: false
        }),
        methods: {
            submit() {
                this.loading = true;
                this.getWeatherByCity(this.city).then(() => {
                    this.$router.push(`/search/${this.city}`)
                });
            }
        }
    }
</script>


<style scoped>

</style>
