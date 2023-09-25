<template>
    <header class="main-nav">
        <a @click.prevent href="/">Adobe Color</a>
        <ul class="main-nav-menu">
            <li class="menuItem" v-for="menuItem in menuItems" :key="menuItem">
                <a @click.prevent href="/">{{ menuItem }}</a>
            </li>
        </ul>
    </header>
</template>

<script lang="ts">
    export default {
        name: 'MainNav',
        data() {
            return {
                menuItems: ['Create', 'Explore', 'Trends', 'Libraries']
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import './MainNav.scss';
</style>
