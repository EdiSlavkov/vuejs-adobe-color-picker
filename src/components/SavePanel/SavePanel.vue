<template>
    <div class="save-panel">
        <SaveCard :colors="colors" />
    </div>
</template>

<script lang="ts">
    import SaveCard from '@/components/SaveCard/SaveCard.vue';
    export default {
        name: 'SavePanel',
        props: {
            colors: {
                type: Array,
                required: true
            }
        },
        components: {
            SaveCard
        }
    };
</script>

<style lang="scss" scoped>
    @import './SavePanel.scss';
</style>
