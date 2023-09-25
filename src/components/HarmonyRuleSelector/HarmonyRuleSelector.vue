<template>
    <div>
        <div class="harmony-rule-container">
            <span>Apply Color Harmony Rule</span>
            <QuestionMarkIcon />
        </div>
        <ul class="rules-list">
            <li v-for="rule in rules" :key="rule">
                <input
                    :id="rule"
                    type="radio"
                    :value="rule"
                    v-model="selectedOption"
                    name="radio"
                />
                <label :for="rule">{{ rule }}</label>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import QuestionMarkIcon from '@/components/QuestionMarkIcon/QuestionMarkIcon.vue';
    export default {
        name: 'HarmonyRuleSelector',
        components: {
            QuestionMarkIcon
        },
        data() {
            return {
                rules: [
                    'Analogous',
                    'Monochromatic',
                    'Triad',
                    'Complementary',
                    'Split Complementary',
                    'Double Split Complementary',
                    'Square',
                    'Compound',
                    'Shades',
                    'Custom'
                ],
                selectedOption: ''
            };
        },

        created() {
            this.selectedOption = this.rules[0];
        }
    };
</script>

<style lang="scss" scoped>
    @import './HarmonyRuleSelector.scss';
</style>
