<script>
export default {
    name: 'Sample',
    data() {
        return {
            count: 1
        }
    }, 
    mounted() {
        console.log('mounted')
        this.count = 2
    },
}
</script>
<style scoped></style>
<template>

    Hello {{count}}
</template>
