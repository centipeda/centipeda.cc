<template>
    <div>
        <HeaderLink url="/feed" title="feed" />
        <Navbar/>
        <p>Links from around the internet:</p>
        <ul>
            <li v-for="(item, index) in items">
                ({{ index }}) {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import feedData from '@/assets/feed.json'

export default {
    layout: 'default',
    name: 'IndexPage',
    data() {
        return {
            'items': feedData['entries']
        }
    }
}
</script>
