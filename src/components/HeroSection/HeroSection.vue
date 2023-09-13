<template>
    <section class="hero-section section">
        <div class="container">
            <h1 class="hero__title">We’ve got your morning covered with <span>Coffee</span>
            </h1>
            <p class="hero__text">It is best to start your day with a cup of coffee. Discover the
                best flavours coffee you will ever have. We provide the best
                for our customers.</p>
            <BaseButton title="Order Now" variant="colored" />
        </div>
    </section>
</template>

<script>
import BaseButton from '../shared/BaseButton.vue';


export default {
    name: 'HeroSection',
    components: { BaseButton }
}
</script>

<style lang="scss" scoped>
.hero-section.section {
    background-image: linear-gradient(90deg, #1E1E1E -6.88%, rgba(0, 0, 0, 0.00) 87.45%),
        url('../../assets/coffee_image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 20vh;
}

.hero__title {
    color: var(--white-color);
    font-size: 22px;
    font-weight: 500;
}

.hero__title span {
    display: block;
    font-family: Clicker Script;
    font-size: 180px;
    font-weight: 400;
}

.hero__text {
    color: var(--white-color);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.7;
    max-width: 45%;
    margin-bottom: 20px;
}
</style>