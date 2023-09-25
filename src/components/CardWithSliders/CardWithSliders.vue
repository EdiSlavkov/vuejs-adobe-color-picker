<template>
    <div class="slider-card-container">
        <span>{{ color.hexString }}</span>
        <div class="sliders-container">
            <SliderComponent
                v-for="(value, key) in colorValues"
                :key="key"
                :max="key === 'a' ? opacityPercentage : maximumColorValue"
                v-model="colorValues[key]"
                :updateCurrentColor="updateCurrentColor"
                :sliderBackgroundImage="generateSliderBackgroundImage(key)"
                @click="handleClick(color.index)"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import SliderComponent from '@/components/SliderComponent/SliderComponent.vue';
    import { MAXIMUM_COLOR_VALUE, OPACITY_PERCENTAGE } from '@/constants';
    import iro from '@jaames/iro';
    export default {
        name: 'CardWithSliders',
        props: {
            color: {
                type: iro.Color,
                required: true
            }
        },
        data() {
            return {
                opacityPercentage: OPACITY_PERCENTAGE,
                maximumColorValue: MAXIMUM_COLOR_VALUE,
                colorValues: {
                    r: this.color.rgba.r,
                    g: this.color.rgba.g,
                    b: this.color.rgba.b,
                    a: this.modifyOpacityProperty(this.color.rgba.a)
                }
            };
        },
        methods: {
            modifyOpacityProperty(value: number | undefined): number {
                if (value) {
                    return value * OPACITY_PERCENTAGE;
                }
                return OPACITY_PERCENTAGE;
            },
            updateCurrentColor() {
                let copy: { r: number; g: number; b: number; a: number } = { ...this.colorValues };
                copy.a /= 100;
                this.color.set(copy);
            },
            generateSliderBackgroundImage(key: string) {
                switch (key) {
                    case 'r':
                        return `linear-gradient(to right, rgb(0, ${this.colorValues.g}, ${this.colorValues.b}) 0%, rgb(255, ${this.colorValues.g}, ${this.colorValues.b})100%)`;
                    case 'g':
                        return `linear-gradient(to right, rgb(${this.colorValues.r}, 0 , ${this.colorValues.b}) 0%, rgb(${this.colorValues.g}, 255, ${this.colorValues.b}) 100%)`;
                    case 'b':
                        return `linear-gradient(to right, rgb(${this.colorValues.r}, ${this.colorValues.g}, 0) 0%, rgb(${this.colorValues.g}, ${this.colorValues.g}, 255) 100%)`;
                    default:
                        return `linear-gradient(to right, #000000, ${this.color.hexString})`;
                }
            },
            handleClick(index: number) {
                this.$emit('setActiveIndex', index);
            }
        },
        watch: {
            colorValues: {
                handler() {
                    this.updateCurrentColor();
                },
                deep: true
            }
        },
        components: {
            SliderComponent
        }
    };
</script>

<style lang="scss" scoped>
    @import './CardWithSliders.scss';
</style>
