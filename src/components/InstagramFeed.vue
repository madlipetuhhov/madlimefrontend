<template>
  <div class="instagram-feed">
    <div class="instagram-exception" v-if="isLoading">Instagrami eelvaade laeb...</div>
    <div class="instagram-exception" v-if="error">{{ error }}</div>
    <div v-else>
      <div class="instagram-text">
        <h2 class="subheading">Jälgi mind Instagramis</h2>
        <Button
            text="@madli.me"
            variant="btn--medium"
            link="https://www.instagram.com/madli.me/"
        />
      </div>
      <div class="container">
        <div class="instagram-grid">
          <div v-for="post in posts.slice(0, 10)" :key="post.id" class="instagram-post">
            <a :href="post.permalink" target="_blank">
              <img class="instagram-img" :src="post.media_url" alt="Clickable Instagram photo"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import {PhInstagramLogo} from "@phosphor-icons/vue";

export default {
  name: "InstagramFeed",
  components: {PhInstagramLogo, Button},
  data() {
    return {
      posts: [],
      isLoading: true,
      error: null,
    };
  },
  methods: {
    async fetchInstagramPosts() {
      const accessToken = process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN
      const userId = process.env.VUE_APP_INSTAGRAM_USER_ID
      const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.posts = data.data;
      } catch (err) {
        this.error = 'Instagrami postituste laadimine ebaõnnestus';
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchInstagramPosts();
  },
};
</script>

<style>
.instagram-feed {
  text-align: center;
  position: relative;
}

.instagram-exception{
  font-size: 1.8rem;
}

.instagram-text {
  position: absolute;
  background-color: rgba(245, 243, 246, 0.9);
  padding: 4.8rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  box-sizing: border-box;
}

.instagram-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;
}

.instagram-post {
  width: 100%;
  overflow: hidden;
}

.instagram-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>