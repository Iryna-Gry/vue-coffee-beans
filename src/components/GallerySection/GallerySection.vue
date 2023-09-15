<template>
    <section class="section gallery__section">
        <div class="container">
<div class="gallery__title">
           <SectionTitle>Enjoy a new blend of coffee style</SectionTitle> 
           <p class="gallery__text">Explore all flavours of coffee with us. There is always a new cup worth experiencings</p>
        </div>
        </div>

    </section>
</template>

<script>
import SectionTitle from '../shared/SectionTitle'
    export default {
        name: 'GallerySection',
        components: {SectionTitle}
        
    }
</script>

<style lang="scss" scoped>
.gallery__title {
    margin-bottom: 16px;
}
.gallery__text {
    color: var(--gray-color);
text-align: center;
font-size: 20px;
line-height: 1.7; 
margin-bottom: 32px;
}
</style>