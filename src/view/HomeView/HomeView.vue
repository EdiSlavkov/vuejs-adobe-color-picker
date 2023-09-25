<template>
    <div class="main-container">
        <div class="left-side-container">
            <NavigationsContainer />
            <div class="sections-container">
                <section class="leftSection">
                    <HarmonyRuleSelector />
                </section>
                <main>
                    <ColorWheel :initColors="initColors" @updateColors="updateColors" />
                    <div class="wrapper">
                        <HorizontalColorPlates
                            :colors="colors"
                            :activeIndex="activeColorPlateIndex"
                            @setActiveIndex="setActiveColorPlateIndex"
                            :changeOrder="swapPlates"
                            :shouldRerender="shouldRerender"
                        />
                        <div class="cards-with-sliders-container">
                            <div class="rgba-definition">
                                <span>R</span>
                                <span>G</span>
                                <span>B</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="S_Sun_18_N@2x"
                                    height="36"
                                    id="S_Sun_18_N_2x"
                                    viewBox="0 0 36 36"
                                    width="36"
                                    class="CreateSlidersAndLabels__brightnessIcon___2z4cD Base__brightnessIcon___1ghxL"
                                >
                                    <circle cx="18" cy="18" r="7.9"></circle>
                                    <rect
                                        height="6"
                                        rx="0.5"
                                        transform="translate(-0.652 5.007) rotate(-22.5)"
                                        width="3.6"
                                        x="10.46"
                                        y="1.142"
                                    ></rect>
                                    <rect
                                        height="6"
                                        rx="0.5"
                                        transform="matrix(0.924, -0.383, 0.383, 0.924, -10.384, 11.51)"
                                        width="3.6"
                                        x="21.94"
                                        y="28.858"
                                    ></rect>
                                    <rect
                                        height="3.6"
                                        rx="0.5"
                                        transform="translate(-8.77 3.392) rotate(-22.5)"
                                        width="6"
                                        x="1.142"
                                        y="21.94"
                                    ></rect>
                                    <rect
                                        height="3.6"
                                        rx="0.5"
                                        transform="translate(-2.267 13.125) rotate(-22.5)"
                                        width="6"
                                        x="28.858"
                                        y="10.46"
                                    ></rect>
                                    <rect
                                        height="3.6"
                                        rx="0.5"
                                        transform="translate(11.441 24.4) rotate(-67.5)"
                                        width="6"
                                        x="20.979"
                                        y="1.838"
                                    ></rect>
                                    <rect
                                        height="3.6"
                                        rx="0.5"
                                        transform="translate(-22.465 31.145) rotate(-67.5)"
                                        width="6"
                                        x="9.073"
                                        y="30.583"
                                    ></rect>
                                    <rect
                                        height="6"
                                        rx="0.5"
                                        transform="translate(-8.891 10.788) rotate(-67.5)"
                                        width="3.6"
                                        x="1.827"
                                        y="9.047"
                                    ></rect>
                                    <rect
                                        height="6"
                                        rx="0.5"
                                        transform="translate(-2.152 44.664) rotate(-67.5)"
                                        width="3.6"
                                        x="30.546"
                                        y="20.942"
                                    ></rect>
                                </svg>
                            </div>
                            <!-- prettier-ignore -->
                            <CardWithSliders
                            v-for="color in colors"
                            :key="shouldRerender ? color.hexString : color.index"
                            :color="(color as iro.Color)"
                            @setActiveIndex="setActiveColorPlateIndex"
                        />
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <SavePanel :colors="colors" />
    </div>
    <FooterComponent />
</template>

<script lang="ts">
    import ColorWheel from '@/components/ColorWheel/ColorWheel.vue';
    import SavePanel from '@/components/SavePanel/SavePanel.vue';
    import NavigationsContainer from '@/components/NavigationsContainer/NavigationsContainer.vue';
    import HarmonyRuleSelector from '@/components/HarmonyRuleSelector/HarmonyRuleSelector.vue';
    import HorizontalColorPlates from '@/components/HorizontalColorPlates/HorizontalColorPlates.vue';
    import CardWithSliders from '@/components/CardWithSliders/CardWithSliders.vue';
    import FooterComponent from '@/components/FooterComponent/FooterComponent.vue';
    import type iro from '@jaames/iro';
    export default {
        name: 'HomeView',
        components: {
            HarmonyRuleSelector,
            NavigationsContainer,
            SavePanel,
            ColorWheel,
            HorizontalColorPlates,
            CardWithSliders,
            FooterComponent
        },
        data() {
            return {
                colors: [] as iro.Color[],
                shouldRerender: false,
                activeColorPlateIndex: -1
            };
        },
        methods: {
            initColors(colors: iro.Color[]): void {
                this.colors = colors;
            },
            updateColors(colorIndex: number) {
                this.shouldRerender = true;
                this.colors = [...this.colors];
                this.setActiveColorPlateIndex(colorIndex);
            },
            setActiveColorPlateIndex(index: number) {
                this.activeColorPlateIndex = index;
            },
            swapPlates(index: number) {
                if (this.activeColorPlateIndex === -1) {
                    return;
                }
                this.colors[index].index = this.activeColorPlateIndex;
                this.colors[this.activeColorPlateIndex].index = index;
                [this.colors[index], this.colors[this.activeColorPlateIndex]] = [
                    this.colors[this.activeColorPlateIndex],
                    this.colors[index]
                ];
                this.activeColorPlateIndex = index;
                this.shouldRerender = true;
            }
        },
        updated() {
            this.shouldRerender = false;
        }
    };
</script>

<style lang="scss" scoped>
    @import './HomeView.scss';
</style>
