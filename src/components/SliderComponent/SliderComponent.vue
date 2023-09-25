<template>
    <div class="slider-container">
        <input
            class="slider"
            type="range"
            :max="max"
            min="0"
            step="1"
            :style="{
                background: sliderBackgroundImage
            }"
            :value="modelValue"
            @input="handleInput"
        />
        <input
            class="no-arrows"
            :max="max"
            min="0"
            type="number"
            :value="modelValue"
            @input="handleInput"
        />
    </div>
</template>

<script lang="ts">
    export default {
        name: 'SliderComponent',
        props: {
            max: {
                type: Number,
                required: true
            },
            modelValue: {
                type: Number,
                required: true
            },
            sliderBackgroundImage: {
                type: String,
                required: true
            }
        },
        methods: {
            handleInput(event: Event) {
                const inputValue = Number((event.target as HTMLInputElement).value);
                const value = Math.max(0, inputValue > this.max ? this.max : inputValue);
                this.$emit('update:modelValue', value);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import './SliderComponent.scss';
</style>
