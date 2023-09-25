<template>
    <div class="navigation-container">
        <MainNav />
        <ToolsNav />
    </div>
</template>

<script lang="ts">
    import MainNav from '@/components/MainNav/MainNav.vue';
    import ToolsNav from '@/components/ToolsNav/ToolsNav.vue';
    export default {
        name: 'NavigationsContainer',
        components: {
            ToolsNav,
            MainNav
        }
    };
</script>

<style scoped>
    @import './NavigationsContainer.scss';
</style>
