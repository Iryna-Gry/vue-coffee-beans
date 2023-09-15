<template>
    <section class="section discover__section">
        <div class="container discover__container">
            <div class="discover__column--left">
                <SectionTitle>Discover the best coffee</SectionTitle>
                <p class="discover__text">
                    Bean Scene is a coffee shop that provides you with quality coffee that
                    helps boost your productivity and helps build your mood. Having a cup
                    of coffee is good, but having a cup of real coffee is greater. There
                    is no doubt that you will enjoy this coffee more than others you have
                    ever tasted.
                </p>
                <div>
                <BaseButton variant="colored-whiteBg" title="Learn More" />
                </div>
            </div>
            <div class="discover__column--right">
                <img src="../../assets/cup-coffee-beans.png" alt="coffee cup of beans" />
            </div>
        </div>
        <img src="../../assets/coffee_blast.png" alt="" class="discover__spill"/>
    </section>
</template>

<script>
import SectionTitle from '../shared/SectionTitle';
import BaseButton from '../shared/BaseButton.vue';
export default {
    name: 'DiscoverSection',
    components: { SectionTitle, BaseButton },
};
</script>

<style lang="scss" scoped>
.discover__section {
    position: relative;
}
.discover__container {
    display: flex;
    gap: 36px;
}

.discover__column {
    &--left {
        display: flex;
        flex-direction: column;
        gap: 29px;
        justify-content: center;
        max-width: 585px;
    }
}

.discover__text {
    color: var(--gray-color);
    font-size: 20px;
    line-height: 1.7;
}
.discover__spill {
position: absolute;
bottom: -50px;
left: 0;
}
</style>
