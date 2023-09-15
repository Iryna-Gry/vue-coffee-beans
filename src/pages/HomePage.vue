<template>
    <HeroSection />
    <DiscoverSection />
    <GallerySection />
</template>

<script>
import HeroSection from '../components/HeroSection/HeroSection'
import DiscoverSection from '../components/DiscoverSection/DiscoverSection.vue'
import GallerySection from '../components/GallerySection/GallerySection'

export default {
    name: 'HomePage',
    components: { HeroSection, DiscoverSection,GallerySection },
}
</script>

<style lang="scss" scoped></style>