<template>
  <div class="book-list">
    <div v-if="showFilter" class="book-filter">
      <input
        v-model="search"
        type="text"
        :placeholder="filterPlaceholder"
        class="book-search"
      />
    </div>
    <div class="book-grid">
      <div v-for="book in visibleBooks" :key="book.isbn" class="card book-card">
        <div class="book-header">
          <strong class="book-title">{{ book.title }}</strong>
          <span class="book-author">{{ book.author }}</span>
        </div>
        <div class="book-meta">
          <span class="book-publisher">{{ book.publisher }}</span>
          <span class="book-rating">
            <span v-for="i in 4" :key="i" class="star" :class="{ filled: i <= book.rating }">&#9734;</span>
          </span>
        </div>
        <div v-if="book.quote" class="book-quote">
          <p>{{ book.quote }}</p>
        </div>
        <a :href="`https://isbndb.com/book/${book.isbn}`" class="book-isbn" target="_blank" rel="noopener">
          ISBN {{ book.isbn }}
        </a>
      </div>
    </div>
    <div v-if="hasMore" class="book-more">
      <button class="action-button" @click="showAll = true">
        {{ showMoreLabel }} ({{ remaining }})
      </button>
    </div>
  </div>
</template>

<script>
import { books } from '../data/books.ts'

export default {
  name: 'BookList',
  props: {
    limit: { type: Number, default: 6 },
    lang: { type: String, default: 'en' },
  },
  data() {
    return {
      showAll: false,
      search: '',
    }
  },
  computed: {
    showFilter() {
      return this.showAll || this.limit === 0
    },
    filterPlaceholder() {
      return this.lang === 'fr' ? 'Filtrer par titre ou auteur...' : 'Filter by title or author...'
    },
    showMoreLabel() {
      return this.lang === 'fr' ? 'Voir plus' : 'Show more'
    },
    filteredBooks() {
      if (!this.search) return books
      const q = this.search.toLowerCase()
      return books.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q)
      )
    },
    visibleBooks() {
      if (this.showAll || this.limit === 0) return this.filteredBooks
      return this.filteredBooks.slice(0, this.limit)
    },
    hasMore() {
      return !this.showAll && this.limit > 0 && this.filteredBooks.length > this.limit
    },
    remaining() {
      return this.filteredBooks.length - this.limit
    },
  },
}
</script>
