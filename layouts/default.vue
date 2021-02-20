<template>
  <section ref="testBlock" class="relative">
    <Header />
    <main>
      <Nuxt />
    </main>
    <a class="absolute" @click="scrollToAnchorPoint('testBlock')">
      <img class="" src="~/assets/up.png"/>
    </a>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  methods: {
        scrollToAnchorPoint(refName) {
            const el = this.$refs[refName]
            el.scrollIntoView({ behavior: 'smooth'})
        }
    }
}
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: 0.5s cubic-bezier(1, 0.25, 0.25, 1);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(0, 30px);
}

main {
  height: 100%;
  width: 100%;
}
.absolute{
  bottom: 80px;
  right: 20px;
}
</style>
