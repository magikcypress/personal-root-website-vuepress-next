<template>
    <div class="grid-item">
        <button type="button" v-on:click="gotosite()" class="action-button">Go live website 🎺</button>
    </div>
</template>
 
<script>
   export default {
     name: "GoLive Button",
     data() {
         return {
             producturl: "https://live.rouquin.me/"
         }
     },
     methods : {
         gotosite(){
             window.open(this.producturl, '_blank');
         }
     }
 }
 </script>