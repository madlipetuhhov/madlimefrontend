<template>
  <div class="container gallery-row">
    <div class="gallery-col">
      <img class="gallery-img" v-for="photo in photosCol1" :key="photo.id" :src="photo.img" :alt="photo.alt" @click="openPhoto(photo.id)">
    </div>
    <div class="gallery-col">
      <img class="gallery-img" v-for="photo in photosCol2" :key="photo.id" :src="photo.img" :alt="photo.alt" @click="openPhoto(photo.id)"/>
    </div>
    <div class="gallery-col">
      <img class="gallery-img" v-for="photo in photosCol3" :key="photo.id" :src="photo.img" :alt="photo.alt" @click="openPhoto(photo.id)"/>
    </div>
    <div class="gallery-col">
      <img class="gallery-img" v-for="photo in photosCol4" :key="photo.id" :src="photo.img" :alt="photo.alt" @click="openPhoto(photo.id)"/>
    </div>
  </div>
</template>

<script>
import PhotoView from "@/views/PhotoView.vue";
import router from "@/router";

export default {
  name: "Gallery",
  components: {PhotoView},
  data() {
    return {
      photosCol1: [
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
      ],
      photosCol2: [
        {
          id: 1,
          img: require("../assets/img/gallery/gallery1.png"),
          alt: "Gallery photo."
        },
        {
          id: 9,
          img: require("../assets/img/gallery/gallery9.png"),
          alt: "Gallery photo."
        },
        {
          id: 4,
          img: require("../assets/img/gallery/gallery4.png"),
          alt: "Gallery photo."
        },
        {
          id: 5,
          img: require("../assets/img/gallery/gallery5.png"),
          alt: "Gallery photo."
        }
      ],
      photosCol3: [
        {
          id: 9,
          img: require("../assets/img/gallery/gallery9.png"),
          alt: "Gallery photo."
        },
        {
          id: 1,
          img: require("../assets/img/gallery/gallery1.png"),
          alt: "Gallery photo."
        },
        {
          id: 5,
          img: require("../assets/img/gallery/gallery5.png"),
          alt: "Gallery photo."
        },
        {
          id: 4,
          img: require("../assets/img/gallery/gallery4.png"),
          alt: "Gallery photo."
        }
      ],
      photosCol4: [
        {
          id: 5,
          img: require("../assets/img/gallery/gallery5.png"),
          alt: "Gallery photo."
        },
        {
          id: 4,
          img: require("../assets/img/gallery/gallery4.png"),
          alt: "Gallery photo."
        },
        {
          id: 1,
          img: require("../assets/img/gallery/gallery1.png"),
          alt: "Gallery photo."
        },
        {
          id: 9,
          img: require("../assets/img/gallery/gallery9.png"),
          alt: "Gallery photo."
        }
      ],
    }
  },
  methods:{
    openPhoto(photoId){
      router.push({name:'photoRoute', params:{id: photoId}})
    }
  }
}
</script>

<style>
.gallery-row {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.gallery-col {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
}

.gallery-img {
  width: 100%;
  height: auto;
}

</style>