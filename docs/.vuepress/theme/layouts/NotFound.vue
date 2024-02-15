<template>
  <p v-if="selectedImage"><img style="width:100%" :src="selectedImage" alt=""></p>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>

<script>
export default {
  name: "NotFound",
  data: {
    images: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/600/200',
      'https://picsum.photos/600/200'
    ],
    selectedImage: null
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.images)
  }
}
</script>