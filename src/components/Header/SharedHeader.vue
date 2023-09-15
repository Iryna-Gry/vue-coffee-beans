<template>
    <header class="header" :class="{ 'onScroll': !view.topOfPage }">
        <div class="container header__container">
            <HeaderLogo />
            <HeaderMenu />
            <div class="header__buttonset">
                <BaseButton variant="transparent" title="Sign In" />
                <BaseButton variant="colored" title="Sing Up" />
            </div>
        </div>
    </header>
</template>

<script>
import BaseButton from '../shared/BaseButton.vue';
import HeaderLogo from './HeaderLogo.vue';
import HeaderMenu from './HeaderMenu.vue';

export default {
    name: 'SharedHeader',
    components: { HeaderLogo, BaseButton, HeaderMenu },
    data() {
        return {
            view: {
                topOfPage: true
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.pageYOffset > 0) {
                if (this.view.topOfPage) this.view.topOfPage = false
            } else {
                if (!this.view.topOfPage) this.view.topOfPage = true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: transparent;
    padding-top: 21px;
    padding-bottom: 21px;

    &.onScroll {
        background-color: var(--black-color);
    }

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__buttonset {
        display: flex;
        gap: 5px;
    }
}
</style>