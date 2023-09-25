<template>
    <!-- prettier-ignore -->
    <div class="horizontal-plates-container">
        <DraggablePlate v-for="color in (colors as iro.Color[])"
        :key="shouldRerender ? color.hexString : color.index"
         :color="color" 
         :activeIndex="activeIndex"
         :changeOrder="changeOrder"
         @emitActiveIndex="emitActiveIndex"/>
    </div>
</template>

<script lang="ts">
    import DraggablePlate from '@/components/DraggablePlate/DraggablePlate.vue';
    import type iro from '@jaames/iro';
    export default {
        name: 'HorizontalColorPlates',
        props: {
            colors: {
                type: Array,
                required: true
            },
            activeIndex: {
                type: Number,
                required: true
            },
            changeOrder: {
                type: Function,
                required: true
            },
            shouldRerender: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            emitActiveIndex(index: number) {
                this.$emit('setActiveIndex', index);
            }
        },
        components: {
            DraggablePlate
        }
    };
</script>

<style lang="scss">
    @import './HorizontalColorPlates.scss';
</style>
