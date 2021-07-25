<template>
<div class="container flex flex-col p-12">
  <h1 class="text-4xl mb-4">{{ article.name }}</h1>
  <client-only>
    <!-- media experiment - start -->
    <img class="w-1/2" v-if="!$experiments" :src="article.media.variations.control.url">
    <img class="w-1/2" v-else-if="$experiments.media === 'control'" :src="article.media.variations[$experiments.media].url">
    <img class="w-1/2" v-else-if="$experiments.media === 'video'" :src="article.media.variations[$experiments.media].url">
    <img class="w-1/2" v-else-if="$experiments.media === 'booklist'" :src="article.media.variations[$experiments.media].url">
    <!-- media experiment - end -->
    <!-- introCopy experiment - start-->
    <p class="my-8">
      {{ $experiments ? article.introCopy.variations[$experiments.introCopy] : article.introCopy.variations.control }}
    </p>
    <!-- introCopy experiment - end-->
  </client-only>
  <p class="mb-20">
    Thanks a lot for reading the article!
    <button class="ml-4 p-2 border border-rounded bg-green text-white" @click="signUp">SIGN UP</button>
  </p>
  <NuxtLink class="underline" to="/">
    HOME
  </NuxtLink>
</div>
</template>

<script>
  export default {
    ssr: false,
    async asyncData({ $content, params: { slug } }) {
      const article = (await $content('articles')
        .where({ slug })
        .fetch())[0];
      return { slug, article };
    },
    methods: {
      signUp () {
        this.$event('sign-up', {
          experiments: this.$experiments
        });
      }
    }
  }
</script>