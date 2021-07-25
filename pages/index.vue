<template>
  <div class="container flex flex-col w-full justify-center text-center pt-20">
    <h1 class="text-4xl">Articles</h1>
    <!-- <pre>
      {{ articles }}
    </pre> -->
    <NuxtLink class="underline" :to="article.slug" v-for="article in articles" :key="article.slug">
      {{ article.name }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .fetch();
    return { articles };
  }
}
</script>
