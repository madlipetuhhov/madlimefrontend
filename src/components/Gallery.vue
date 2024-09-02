<template>
  <div class="container gallery-row">
    <div class="gallery-col">
      <img class="gallery-img" v-for="photo in photosCol1" :key="photo.img" :src="photo.img" :alt="photo.alt">
    </div>
    <div class="gallery-col">
      <img class="gallery-img" v-for="photo in photosCol2" :key="photo.img" :src="photo.img" :alt="photo.alt"/>
    </div>
    <div class="gallery-col">
      <img class="gallery-img" v-for="photo in photosCol3" :key="photo.img" :src="photo.img" :alt="photo.alt"/>
    </div>
    <div class="gallery-col">
      <img class="gallery-img" v-for="photo in photosCol4" :key="photo.img" :src="photo.img" :alt="photo.alt"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      photosCol1: [
        {
          img: require("../assets/img/gallery/gallery4.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery9.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery5.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery1.png"),
          alt: "Gallery photo."
        }
      ],
      photosCol2: [
        {
          img: require("../assets/img/gallery/gallery1.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery9.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery4.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery5.png"),
          alt: "Gallery photo."
        }
      ],
      photosCol3: [
        {
          img: require("../assets/img/gallery/gallery9.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery1.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery5.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery4.png"),
          alt: "Gallery photo."
        }
      ],
      photosCol4: [
        {
          img: require("../assets/img/gallery/gallery5.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery4.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery1.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery9.png"),
          alt: "Gallery photo."
        }
      ],
    }
  },
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