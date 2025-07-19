<template>
    <div>
        <HeaderLink url="/" title="about" />
        <Navbar/>
        <p>
            Hi, I'm Joshua. I'm a software engineer in New York
            City. I like working with firmware, embedded systems, and
            Web projects like this site. I also enjoy invertebrate sea creatures, like
            this mantis shrimp:
        </p>
        <img class="mx-auto my-5" :src="require(`~/assets/photos/mantis_shrimp.jpg`)" />
        <p>
            If you'd like to get in touch, you can e-mail me at 
            <a href="mailto:joshua@centipeda.cc">joshua@centipeda.cc</a>.
        </p>
    </div>
</template>

<script>
export default {
    layout: 'default',
    name: 'IndexPage'
}
</script>

<style>
img {
    width: 400px;
}
</style>
