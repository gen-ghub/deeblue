<template>
  <section>
    <PhotoImage />
    <TopExplanation />
    <Business />
    <section class="h-full flex justify-center contact">
        <nuxt-link to="/Link03" class="block w-full flex justify-center m-2">
          <div>
            <h1 class="pt-32 pb-10">お問い合わせはこちらから</h1>
            <h3 class="pt-8 pb-32">　　　　Contact</h3>
          </div>
        </nuxt-link>
    </section>
  </section>
</template>

<script>
import PhotoImage from '@/components/PhotoImage.vue'
import TopExplanation from '@/components/TopExplanation.vue'
import Business from '../components/Business.vue'

export default {
  components: {
    PhotoImage,
    TopExplanation,
    Business,
  },
}

</script>

<style lang="scss" scoped>
.contact{
  :hover{
    background-color: #022444;
    color: white;
  }
}
</style>
