<template>
    <header class="fixed z-20 pt-10 pb-8 w-full  text-white font-black tracking-widest business-header">
      <div class="grid lg:grid-cols-2 ">
        <div class="text-xl lg:text-3xl ml-8">
          <router-link to="/">
            <img class="" src="~/assets/logo1.png" />
          </router-link>
        </div>
        <HeaderNav />
      </div>
    </header>
</template>

<script>
import HeaderNav from "@/components/headerNav.vue";
export default {
  components: {
    HeaderNav
  }
};
</script>

<style lang="scss" scoped>
header{
  background-color: rgba( #ffffff46, 0.1);
}
// bg-transparent border-b-2
</style>

