<template>
    <div class="svg" @click="$emit('onClick')" v-html="require(`~/assets/svg/${name}.svg?raw`)"></div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default() {
                return "hour"
            }
        }
    }
}
</script>

<style lang="scss">
.svg {
    display: flex;
    align-items: center;
    justify-content: center;

   
}
</style>
