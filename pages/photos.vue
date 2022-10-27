<template>
  <div>
    <HeaderLink url="/photos" title="photos" />
    <Navbar/>
    <div class="px-5">
        <p>
            I like going to aquariums and taking photos:
        </p>
        <br/>
        <div class="gallery grid md:grid-cols-2 grid-cols-1 mb-10 bg-black">
            <div v-for="(img, index) in images" :key="index"  >
                <a :href="require(`~/assets/photos/${img}`)" class="block m-0 h-100 w-100">
                    <img :src="require(`~/assets/photos/${img}`)" />
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
const images = Array.from(
    require.context('../assets/photos/', false, /\.jpg$/).keys()
).map(
    fname => fname.substring(2)
);
export default {
    layout: 'default',
    name: 'PhotosPage',
    data() {
        return {
            images: images
        }
    }
}
</script>

<style scoped>
img,a {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>
