<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import {
  pageView
} from '@/tracking.js'

export default {
  watch: {
    $route: {
      immediate:  true,
      handler (route) {
        const { name, path, query, params } = route;
        pageView({
          route: { name, path, query, params },
          payload: { experiments: this.$experiments }
        });
      }
    }
  }
}
</script>
