<template>
    <!-- prettier-ignore -->
    <div
        class="draggable-plate"
        draggable="true"
        @click="handleClick(color.index)"
        @dragover.prevent
        @drop="handleDrop(color.index)"
        :style="{
            backgroundColor: color.rgbaString,
            border: activeIndex === color.index ? '1px solid #000000' : 'none'
        }"
    >
    <div class="arrow-background" v-show="activeIndex === color.index">
        <span class="arrow">></span>
    </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'DraggablePlate',
        props: {
            color: {
                type: Object,
                required: true
            },
            activeIndex: {
                type: Number,
                required: true
            },
            changeOrder: {
                type: Function,
                required: true
            }
        },
        methods: {
            handleClick(index: number) {
                this.$emit('emitActiveIndex', index);
            },
            handleDrop(index: number) {
                this.changeOrder(index);
            }
        }
    };
</script>
<style lang="scss">
    @import './DraggablePlate.scss';
</style>
