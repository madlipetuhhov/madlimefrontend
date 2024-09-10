<template>
  <div class="container section-first photo-view">
    <div class="photo" v-if="photo">
      <img class="photo-img" :src="photo.img" :alt="photo.alt" :key="photo.id"/>

      <button class="icon close--x" @click="closePhoto">
        <PhX :size="27"/>
      </button>
      <button class="icon caret--left" @click="prevPhoto">
        <PhCaretLeft :size="32"/>
      </button>
      <button class="icon caret--right" @click="nextPhoto">
        <PhCaretRight :size="32"/>
      </button>
    </div>

    <div v-else>
      <p>Oota natuke, foto laeb...</p>
    </div>
  </div>

  <section class="section-footer">
    <Footer/>
  </section>
</template>

<script>
import Footer from "@/components/Footer.vue";
import router from "@/router";
import {PhCaretLeft, PhCaretRight, PhX} from "@phosphor-icons/vue";

export default {
  name: "PhotoView",
  components: {PhCaretRight, PhCaretLeft, PhX, Footer},
  props: {
    photoId: String
  },
  data() {
    return {
      photo: null
    };
  },
  methods: {
    displayPhoto() {
      const photoId = parseInt(this.photoId)
      const photos = [
        {
          id: 4,
          img: require("../assets/img/gallery/gallery4.png"),
          alt: "Gallery photo."
        },
        {
          id: 9,
          img: require("../assets/img/gallery/gallery9.png"),
          alt: "Gallery photo."
        },
        {
          id: 5,
          img: require("../assets/img/gallery/gallery5.png"),
          alt: "Gallery photo."
        },
        {
          id: 1,
          img: require("../assets/img/gallery/gallery1.png"),
          alt: "Gallery photo."
        }
      ];
      this.photo = photos.find(photo => photo.id === photoId);
    },
    closePhoto() {
      router.push({name: 'portfolioRoute'})
    }
  },
  mounted() {
    this.displayPhoto()
  },
}
</script>

<style>
.photo-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.photo {
  position: relative;
}

.photo-img {
  max-width: 100%;
}

.close--x {
  top: 0;
  right: 0;
  padding: 4px;
}


</style>