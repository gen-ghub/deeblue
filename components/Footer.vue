<template>
    <footer>
      <div class="grid grid-cols-6 gap-4 pt-20 pb-10">
        <div class="col-start-2 col-span-4 flex justify-evenly">
          <div>
            <ul>
              <li><router-link to="/">トップページ</router-link></li>
              <li><nuxt-link class="tracking-widest font-thin " to="/Link01">事業内容</nuxt-link></li>
              <li><nuxt-link class="tracking-widest font-thin " to="/Link02">企業情報</nuxt-link></li>
              <li><nuxt-link class="tracking-widest font-thin " to="/Contact">お問い合わせ</nuxt-link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="http://bbqdeli.jp/">バーベキューデリ</a></li>
              <li><a href="http://www.bbq-ranger.com">バーベキュー隊</a></li>
              <li><a href="https://beerdeli.jp/">ビールデリ</a></li>
              <li><a href="flashmob.biz">ゼロモブ</a></li>
            </ul>
          </div>
          <section>
          <h1 class="text-xl font-thin tracking-widest">SNS</h1>
          <section class="flex">
            <a href="/"><img class="px-2 py-1" src="~/assets/f.png" /></a><span>|</span>
            <a href="/"><img class="px-2 py-1" src="~/assets/tw.png" /></a><span>|</span>
            <a href="/"><img class="px-2 py-1" src="~/assets/in.png" /></a>
          </section>
        </section>
        </div>
      </div>
      <div class="flex justify-center">
        <p class="copyright">&copy; 2021 Deeblue Co., Ltd.</p>
      </div>
    </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
footer{
  color: #fff;
  padding: 20px;
  background-color: #022444;
}
li {
  padding-bottom: 2vh;
}
</style>
