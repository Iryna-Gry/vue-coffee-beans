<template>
    <button type="button" :class="variant" class="button">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        variant: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }

}
</script>

<style lang="scss" scoped>
.button.colored {
    background-color: var(--cream-color);
    border: 1px solid var(--cream-color);
    box-shadow: 0px 6px 12px 0px rgba(249, 192, 106, 0.22);
    color: var(--black-color);

    &:hover,
    &:focus {
        background-color: transparent;
        color: var(--white-color);

    }
    &-whiteBg {
        background-color: var(--cream-color);
    border: 1px solid var(--cream-color);
    box-shadow: 0px 6px 12px 0px rgba(249, 192, 106, 0.22);
    color: var(--black-color);
    &:hover,
    &:focus {
        background-color: transparent;
    }
    }
}

.button.transparent {
    color: var(--white-color);
    font-size: 14px;
    font-weight: 500;
    text-decoration: underline;
    background-color: transparent;
    border: 1px solid transparent;

    &:hover,
    &:focus {
        border-color: var(--cream-color);
        text-decoration: none;
        box-shadow: 0px 6px 12px 0px rgba(249, 192, 106, 0.22);

    }
}
</style>