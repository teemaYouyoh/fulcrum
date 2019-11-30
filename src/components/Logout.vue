<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        mounted(){
            this.$store.commit('setCurrentUser', null);
            this.$router.push('/');
        },
    }
</script>