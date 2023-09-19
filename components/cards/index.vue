<template>
    <div class="card" :class="type">
        <template v-if="type == 'vertical'">
            <h1>toxa</h1>
        </template>
        <template v-else>
            <h2>Toxa</h2>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default() {
                return 'vertical'
            }
        }
    }

}
</script>

<style>

</style>