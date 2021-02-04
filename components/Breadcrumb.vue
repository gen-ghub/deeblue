<template>
  <div class="l-breadcrumb">
    <div class="l-breadcrumb__inner pt-4">
      <ul class="l-breadcrumb__items flex">
        <li class="l-breadcrumb__item ml-6" v-for="breadcrumb in breadcrumbs.data" :key="breadcrumb.name">
          <a v-if="breadcrumb.path" :href="breadcrumb.path" class="l-breadcrumb__text">{{ breadcrumb.name }}　>></a>
          <span v-else class="l-breadcrumb__text">{{ breadcrumb.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: Object
  }
}
</script>
<style lang="scss" scoped>

</style>
