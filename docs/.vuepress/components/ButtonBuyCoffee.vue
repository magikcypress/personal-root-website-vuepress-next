<template>
   <button type="button" v-on:click="gotosite()" class="action-button">Buy me coffee ☕</button>
</template>

<script>
  export default {
    name: "BuyCoffee Button",
    data() {
        return {
            producturl: "https://www.buymeacoffee.com/magikcypress"
        }
    },
    methods : {
        gotosite(){
            window.open(this.producturl, '_blank');
        }
    }
}
</script>