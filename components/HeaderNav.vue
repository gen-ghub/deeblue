<template>
    <nav>
      <ul class="lg:text-xl flex content-center mr-8 h-full">
        <li>
          <nuxt-link to="/Link01">事業内容</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Link02">企業情報</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Link03">お問い合わせ</nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  components:{}
};
</script>

<style lang="scss" scoped>
nav{
  color: #fff;
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
      list-style-type: none;
      margin-left: 15px;
      a{
        color: #fff;
      }
    }
  }
}
</style>
