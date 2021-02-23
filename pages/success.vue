<template>
  <section class="p-40">
    <h1 class="flex justify-center m-40">
      お問い合わせ頂きありがとうございました。
    </h1>
    <div class="flex justify-center">
      <nuxt-link to="/" class=" text-2xl btn rounded-md"> 戻る </nuxt-link>
    </div>
  </section>
</template>


<style lang="scss" scoped>
section{
  height: 100vh;
  background-color: #022444;
  color: #fff;
  h1{
    font-size: 30px;
  }
}
.btn {
  color: #fff;
  padding: 6px 20px;
  background: #022444;
  border: 1px solid #fff;
  &:hover {
    color: black;
    background-color: #fff;
    border: 1px solid black;
  }
}
</style>
