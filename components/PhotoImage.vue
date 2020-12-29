<template>
  <hooper :settings="hooperSettings" style="height: 100vh" class="slide flex justify-center">
    <slide>
      <img class="p-2" src="~/assets/bbq1.jpg" />
    </slide>
    <slide>
      <img class="p-2" src="~/assets/a.jpg" />
    </slide>
    <slide>
      <img class="p-2" src="~/assets/biru.jpg" />
    </slide>
    <slide>
      <img class="p-2" src="~/assets/camp.jpg" />
    </slide>
  </hooper>

</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination, // ページネーションが必要なときにimport
  Navigation as HooperNavigation  // 左右のナビゲーションが必要なときにimport
  } from 'hooper'
import 'hooper/dist/hooper.css' // hooperのcssを適用

export default {
components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        autoPlay: true,
        hoverPause: false,
        playSpeed: 6000,
        mouseDrag: false,
        touchDrag: false,
        wheelControl: false,
        keysControl: false,
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.slide {
  background-color: #022444;
  img {
    height: 99%;
    width: 99.8%;
    object-fit: cover;
  }
}

</style>
