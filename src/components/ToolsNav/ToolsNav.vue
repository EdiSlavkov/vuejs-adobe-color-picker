<template>
    <ul class="tools-list">
        <li v-for="menuItem in menuItems" :key="menuItem">
            {{ menuItem }}
            <NavNewSectionBadge v-if="menuItems[menuItems.length - 1] === menuItem" />
        </li>
    </ul>
</template>

<script lang="ts">
    import NavNewSectionBadge from '@/components/NavNewSectionBadge/NavNewSectionBadge.vue';
    export default {
        name: 'ToolsNav',
        components: {
            NavNewSectionBadge
        },
        data() {
            return {
                menuItems: [
                    'Color Wheel',
                    'Extract Theme',
                    'Extract Gradient',
                    'Accessibility Tools'
                ]
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import './ToolsNav.scss';
</style>
