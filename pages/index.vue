<template>
  <div>
    <b-row>
      <b-col>
        <b-card
          title="Nuxt Blog"
          sub-title="Nuxt Blog test app"
          style="min-height: 15rem;"
        ></b-card>
      </b-col>
    </b-row>
    <PostList :postList="postList" />
  </div>
</template>

<script>
import PostList from "~/components/posts/PostList";
export default {
  computed: {
    postList() {
      return this.$store.getters['posts/postList'];
    }
  },
  components: {
    PostList
  }
};
</script>

<style></style>
