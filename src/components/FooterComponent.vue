<template>
<div id="page-container">
    <div id="content-wrap"></div>
    <footer id="footer">| Made by Reece | All Rights Reserved |</footer>
</div>
</template>

<script>
export default {
    name: 'FooterComponent'
};
</script>

<style scoped>
#page-container {
    position: relative;
}
/* Footer height */
#content-wrap {
    padding-bottom: 2.5rem;
}
/* Footer height */
#footer {
    background-color: #242424;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    }
</style>

