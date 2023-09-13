<template>
    <div class="header__menu">
        <router-link to="/" class="menu__link link">Home</router-link>
        <router-link to="/menu" class="menu__link link">Menu</router-link>
        <router-link to="/about" class="menu__link link">About Us</router-link>
        <router-link to="/contact" class="menu__link link">Contact Us</router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderMenu',
}
</script>

<style lang="scss" scoped>
.header__menu {
    display: flex;
    gap: 60px;
}

.menu__link {
    color: var(--white-color);
    font-size: 14px;
    font-weight: 500;
}
</style>