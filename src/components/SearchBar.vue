<script setup>

</script>
<style scoped>
div{
    text-align: left;
}
.search-bar {
    width: 100%;
    height: 2em;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 1em;
    font-size: 1em;
}
</style>
<template>
    <div>
        <label for="search-bar" >Search</label>
    </div>
    <div style="width: 400px; ">
        <input type="text" placeholder="Type here to search ..." class="search-bar"/>
    </div>
</template>