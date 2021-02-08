<template>
  <footer>
    <div class="grid grid-cols-6 gap-4 pt-16 pb-10 pc-screen">
      <div class="col-start-1 col-span-8 flex justify-around">
        <div>
          <ul class="flex">
            <li class="mr-8"><router-link to="/">トップページ</router-link></li>
            <li class="mr-8">
              <nuxt-link class="tracking-widest font-thin" to="/Link01"
                >事業内容</nuxt-link
              >
            </li>
            <li class="mr-8">
              <nuxt-link class="tracking-widest font-thin" to="/Link02"
                >企業情報</nuxt-link
              >
            </li>
            <li class="mr-8">
              <nuxt-link class="tracking-widest font-thin" to="/Link03"
                >採用情報</nuxt-link
              >
            </li>
            <li class="mr-8">
              <a class="tracking-widest font-thin" href="https://bbqdeli.jp/contact/">お問い合わせ</a>
            </li>
          </ul>
        </div>
        <section class="flex">
          <a href="/"
            ><img class="px-2 py-1 footer-img" src="~/assets/f.png" /></a
          ><span>|</span>
          <a href="/"
            ><img class="px-2 py-1 footer-img" src="~/assets/tw.png" /></a
          ><span>|</span>
          <a href="/"
            ><img class="px-2 py-1 footer-img" src="~/assets/in.png"
          /></a>
        </section>
      </div>
    </div>
    <div class="phone-screen">
      <section class="flex justify-center mb-5">
        <a href="/"><img class="px-2 py-1 footer-img" src="~/assets/f.png" /></a
        ><span>|</span>
        <a href="/"
          ><img class="px-2 py-1 footer-img" src="~/assets/tw.png" /></a
        ><span>|</span>
        <a href="/"
          ><img class="px-2 py-1 footer-img" src="~/assets/in.png"
        /></a>
      </section>
    </div>
    <div class="flex justify-center">
      <p class="copyright">&copy; 2021 Deeblue Co., Ltd.</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.phone-screen {
  display: none;
}
footer {
  color: #fff;
  padding: 20px;
  background-color: #022444;
}
li {
  padding-bottom: 2vh;
}

@media screen and (max-width: 425px) {
  .pc-screen {
    display: none;
  }
  .phone-screen {
    display: block;
  }

  footer {
    .copyright {
      font-size: 10px;
    }
    .footer-img {
      height: 20px;
      object-fit: cover;
    }
  }
}
@media screen and (max-width: 372px) {
}
</style>
