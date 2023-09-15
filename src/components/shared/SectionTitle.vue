<template>
    <h2 class="section__title">
        <slot></slot>
    </h2>
</template>

<script>
export default {
    name: 'SectionTitle',
}
</script>

<style lang="scss" scoped>
.section__title {
    color: var(--brown-primary-color);
    font-size: 54px;
    font-weight: 700;
    text-align: center;
}
</style>