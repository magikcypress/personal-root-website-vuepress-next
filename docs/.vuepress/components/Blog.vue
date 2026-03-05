<template>
  <div class="blog-list">
    <div v-for="post in visiblePosts" :key="post.slug" class="card blog-card">
      <span class="blog-date">{{ post.date }}</span>
      <a :href="`/blog/${post.slug}`" class="blog-title">{{ post.title }}</a>
      <Badge :type="post.lang === 'fr' ? 'warning' : 'tip'" :text="post.lang" vertical="middle" />
    </div>
    <div v-if="hasMore" class="blog-more">
      <button class="action-button" @click="showAll = true">
        {{ showMoreLabel }} ({{ remaining }})
      </button>
    </div>
  </div>
</template>

<script>
const posts = [
  { slug: 'whatapp', title: 'dialogue avec OpenAI sur whatapp', date: '20/02/2025', lang: 'fr' },
  { slug: 'AI-Avatar-OpenAI', title: 'Update my avatar with AI (OpenAI)', date: '21/07/2024', lang: 'en' },
  { slug: 'AI-Avatar-Cohere', title: 'Update my avatar with AI (Cohere)', date: '21/07/2024', lang: 'en' },
  { slug: 'AI-Avatar-Otter', title: 'Update my avatar with AI (Cyber-Otter 2.0)', date: '21/07/2024', lang: 'en' },
  { slug: 'Balade-Marseille', title: 'Balade à Marseille', date: '03/02/2024', lang: 'fr' },
  { slug: 'Cookies', title: 'Cookies', date: '02/15/2024', lang: 'en' },
  { slug: 'Bill-Internet-Provider', title: 'Bill On My Internet Provider', date: '09/06/2023', lang: 'en' },
  { slug: 'Depreciate-Key-Brookworm', title: 'Depreciate Key Debian Brookworm', date: '08/09/2023', lang: 'en' },
  { slug: 'Abreviations-M', title: 'Abreviations M.', date: '07/26/2023', lang: 'fr' },
  { slug: 'OddCommand-1', title: 'OddCommand', date: '06/10/2023', lang: 'en' },
  { slug: 'gaufrette', title: 'Gaufrette', date: '05/25/2023', lang: 'fr' },
  { slug: 'Crush', title: 'Crush', date: '05/16/2023', lang: 'fr' },
  { slug: 'Anniv', title: 'Anniv', date: '05/16/2023', lang: 'fr' },
  { slug: 'Eze', title: 'Eze', date: '05/16/2023', lang: 'fr' },
  { slug: 'OddCommand', title: 'OddCommand', date: '03/09/2023', lang: 'en' },
  { slug: 'disparition', title: 'Disparition', date: '10/16/2022', lang: 'fr' },
  { slug: 'ours', title: "L'ours", date: '10/16/2022', lang: 'fr' },
]

export default {
  name: 'Blog',
  props: {
    limit: { type: Number, default: 0 },
    lang: { type: String, default: 'en' },
  },
  data() {
    return {
      showAll: false,
    }
  },
  computed: {
    showMoreLabel() {
      return this.lang === 'fr' ? 'Tous les articles' : 'All posts'
    },
    visiblePosts() {
      if (this.limit === 0 || this.showAll) return posts
      return posts.slice(0, this.limit)
    },
    hasMore() {
      return this.limit > 0 && !this.showAll && posts.length > this.limit
    },
    remaining() {
      return posts.length - this.limit
    },
  },
}
</script>
