<template>
    <div class="pages-banner">
        <ul>
            <nuxt-link tag="li" v-for="(item, index) in breadcrumbs" :key="index" :to="item.link"
                :class="{ active: !item.link }">
                {{ item.title }}
            </nuxt-link>
        </ul>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        breadcrumbs: {
            type: Array,
            default() {
                return [
                    {
                        title: "Toxirjon",
                        link: '/'
                    },

                    {
                        title: "Toxirjon",
                        link: '/contact'
                    },
                ]
            }
        },
        title: {
            type: String,
            default() {
                return 'Title'
            }
        }
    }

}
</script>

<style>

</style>