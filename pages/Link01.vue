<template>
  <div class="max-w">
    <div>
      <img class="link-img" src="~/assets/link1.jpg" />
    </div>
    <BusinessTitle />
    <BusinessItem />
    <section class="mt-40 h-full flex justify-center contact">
        <nuxt-link to="/Contact" class="block w-full flex justify-center m-2">
          <div>
            <h1 class="pt-32 pb-10">お問い合わせはこちらから</h1>
            <h3 class="pt-8 pb-32">　　　　Contact</h3>
          </div>
        </nuxt-link>
    </section>
  </div>
</template>

<script>
import BusinessTitle from '@/components/Link01/BusinessTitle.vue'
import BusinessItem from '@/components/Link01/BusinessItem.vue'

export default {
  components: {
    BusinessTitle,
    BusinessItem,
  },
};
</script>

<style lang="scss" scoped>
.link-img{
  border-top: 8px solid #022444;
    height: 70vh;
    width: 100vw;
    object-fit: cover;
  }
.max-w{
  max-width:100vw;
}
.image-size{
  height: 70vh;
  width: 60vw;
  object-fit: cover;
}

.contact{
  :hover{
    background-color: #022444;
    color: white;
  }
}



</style>
