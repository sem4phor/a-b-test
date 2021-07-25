<template>
<div>
  <h1 class="text-4xl">{{ article.name }}</h1>
  <img :src="article.media.variations.control.url">
  {{ article }}
</div>
</template>

<script>
  export default {
    async asyncData({ $content, params: { slug } }) {
      const article = await $content('articles')
        .where({ slug })
        .fetch();
      return { slug, article };
    }
  }
</script>