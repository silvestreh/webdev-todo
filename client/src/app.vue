<template>
    <div class="wrapper">
        <router-view :is="view"></router-view>
    </div>
</template>

<script>
import store from './vuex/store';

export default {
    store,
};
</script>

<style lang="scss" src="./stylesheets/main.scss"></style>
