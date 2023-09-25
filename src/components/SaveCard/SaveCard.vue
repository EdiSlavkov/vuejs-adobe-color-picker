<template>
    <div class="card-container">
        <!-- prettier-ignore -->
        <div class="colors-container">
                <div class="rgba" :style="getColorStyle(color)"
                 v-for="color in (colors as iro.Color[])" :key="color.index"></div>
        </div>
        <h2>Generate stunning palettes with Adobe's Color Wheel</h2>
        <span
            >Use the Color Wheel to create harmonious colors that make a palette. Choose your base
            color, then select from a variety of color harmonies like analogous, triadic,
            complementary, and more to create beautiful designs.</span
        >
        <button>Save</button>
    </div>
</template>

<script lang="ts">
    import type iro from '@jaames/iro';

    export default {
        name: 'SaveCard',
        props: {
            colors: {
                type: Array,
                required: true
            }
        },
        methods: {
            getColorStyle(color: iro.Color) {
                const borderRadius =
                    color.index === 0
                        ? '5px 0 0 5px'
                        : color.index === this.colors.length - 1
                        ? '0 5px 5px 0'
                        : 'none';
                return {
                    borderRadius,
                    backgroundColor: color.rgbaString
                };
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import './SaveCard.scss';
</style>
