<template>
    <div class="picker" ref="picker"></div>
</template>

<script lang="ts">
    import iro from '@jaames/iro';
    import { setInitialColors } from '@/utils';
    export default {
        name: 'ColorWheel',
        props: {
            initColors: {
                type: Function,
                required: true
            }
        },
        data() {
            return {
                colorPicker: {} as iro.ColorPicker
            };
        },
        mounted() {
            const ref = this.$refs.picker as HTMLElement;
            const options = {
                layout: [
                    {
                        component: iro.ui.Wheel
                    }
                ],
                width: 240,
                borderColor: '#e3dbd8',
                borderWidth: 1,
                colors: setInitialColors()
            };
            this.colorPicker = iro.ColorPicker(ref, options);
            this.colorPicker.on('input:change', (color: iro.Color) => {
                this.$.emit('updateColors', color.index);
            });
            this.initColors(this.colorPicker.colors);
        }
    };
</script>

<style lang="scss">
    @import './ColorWheel.scss';
</style>
