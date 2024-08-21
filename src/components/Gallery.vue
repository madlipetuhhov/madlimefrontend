<template>
  <div class="gallery">
    <div class="container grid--gallery grid--4-cols">
      <figure class="gallery-item" v-for="photo in photos">
        <img class="gallery-img" :src="photo.img" :alt="photo.alt"/>
      </figure>
    </div>
  </div>
</template>

<script>


export default {
  name: "Gallery",
  data() {
    return {
      photos: [
        {
          img: require("../assets/img/gallery/gallery1.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery9.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery3.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery5.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery4.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery6.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery8.png"),
          alt: "Gallery photo."
        },
        {
          img: require("../assets/img/gallery/gallery7.png"),
          alt: "Gallery photo."
        }
      ],
    }
  },
}
</script>

<style>
.grid--gallery {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
  grid-auto-rows: 1.6rem;
}

.gallery-img {
  width: 100%;
  height: auto;
  display: block;
}

</style>