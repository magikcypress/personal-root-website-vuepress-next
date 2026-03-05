<template>
  <div class="vinyl-list">
    <!-- Homepage mode: horizontal carousel -->
    <div v-if="mode === 'carousel'" class="vinyl-carousel">
      <div class="vinyl-carousel-track">
        <div v-for="(v, i) in carouselItems" :key="i" class="vinyl-carousel-item">
          <div class="card vinyl-card">
            <strong>{{ v.artist }}</strong>
            <span class="vinyl-album">{{ v.album }}</span>
            <span class="vinyl-label">{{ v.label }}</span>
          </div>
        </div>
      </div>
      <div class="vinyl-more">
        <a :href="collectionLink" class="action-button">
          {{ collectionLabel }}
        </a>
      </div>
    </div>

    <!-- Full collection mode: image grid -->
    <div v-else class="vinyl-grid">
      <div v-for="(v, i) in visibleCollection" :key="i" class="vinyl-cover">
        <img :src="v.imageUrl" :alt="v.title" loading="lazy" />
        <div class="vinyl-overlay">
          <span class="vinyl-overlay-title">{{ v.title }}</span>
          <span v-if="v.year" class="vinyl-overlay-year">{{ v.year }}</span>
        </div>
      </div>
    </div>
    <div v-if="mode === 'grid' && hasMore" class="vinyl-more">
      <button class="action-button" @click="showAll = true">
        {{ showMoreLabel }} ({{ remaining }})
      </button>
    </div>
  </div>
</template>

<script>
import { featuredVinyl, collectionVinyl } from '../data/vinyl.ts'

export default {
  name: 'VinylList',
  props: {
    mode: { type: String, default: 'carousel' },
    limit: { type: Number, default: 8 },
    lang: { type: String, default: 'en' },
  },
  data() {
    return {
      showAll: false,
    }
  },
  computed: {
    carouselItems() {
      return featuredVinyl.slice(0, this.limit)
    },
    collectionLink() {
      return this.lang === 'fr' ? '/fr/passion/vinyl.html' : '/passion/vinyl.html'
    },
    collectionLabel() {
      return this.lang === 'fr' ? 'Collection complète' : 'Full collection'
    },
    showMoreLabel() {
      return this.lang === 'fr' ? 'Voir plus' : 'Show more'
    },
    visibleCollection() {
      if (this.showAll) return collectionVinyl
      return collectionVinyl.slice(0, this.limit)
    },
    hasMore() {
      return !this.showAll && collectionVinyl.length > this.limit
    },
    remaining() {
      return collectionVinyl.length - this.limit
    },
  },
}
</script>
