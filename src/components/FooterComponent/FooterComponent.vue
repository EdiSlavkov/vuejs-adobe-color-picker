<template>
    <footer class="footer">
        <ul>
            <div class="first-half">
                <li v-for="link in firstHalf" :key="link">
                    <a href="" @click.prevent>{{ link }}</a>
                </li>
            </div>
            <div class="second-half">
                <li v-for="link in secondHalf" :key="link">
                    <a href="" @click.prevent>{{ link }}</a>
                </li>
            </div>
        </ul>
        <div class="footer-logo-wrapper">
            <div class="copyright">Copyright © 2023 Adobe. All rights reserved.</div>
            <span class="footer-logo">Adobe</span>
        </div>
    </footer>
</template>

<script lang="ts">
    export default {
        name: 'FooterComponent',
        data() {
            return {
                links: [
                    'Language:English',
                    'User',
                    'Forums',
                    'Community',
                    'Guidelines',
                    'Privacy',
                    'Terms of Use',
                    'Cookie preferences',
                    'Do not sell or share my personal information'
                ]
            };
        },
        computed: {
            firstHalf() {
                return this.links.slice(0, Math.ceil(this.links.length / 2));
            },
            secondHalf() {
                return this.links.slice(Math.ceil(this.links.length / 2));
            }
        }
    };
</script>

<style lang="scss">
    @import './FooterComponent.scss';
</style>
