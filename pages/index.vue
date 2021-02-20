<template>
  <section >
    <PhotoImage />
    <router-link to="/Link01#testBlock">
    Link to TestBlock in TestPage
</router-link>
    <TopExplanation />
    <Business />
    <section class="h-full flex justify-center contact">
        <nuxt-link to="/Contact" class="block w-full flex justify-center m-2">
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
  data: function(){
        return {
            hash: this.$route.hash,
        }
    },
    mounted() {
        this.$nextTick(function () {
            if (this.hash) {
                const refName = this.hash.replace('#', '')
                this.scrollToAnchorPoint(refName)
            }
        })
    },
    methods: {
        scrollToAnchorPoint(refName) {
            const el = this.$refs[refName]
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }
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
