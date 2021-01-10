<template>
    <header class="fixed z-20 pt-10 pb-8 w-full  text-white tracking-widest font-thin font-serif">
      <div class="grid sm:grid-cols-2 ">
        <div class="ml-8 w-1/4">
          <router-link to="/">
            <h1 class="text-4xl">DEEBLUE</h1>
          </router-link>
        </div>
        <nav>
      <ul class="lg:text-xl flex content-center mr-8 h-full">
        <li>
          <nuxt-link class="tracking-widest font-thin " to="/Link01a">事業内容</nuxt-link>
        </li>
        <li>
          <nuxt-link class="tracking-widest font-thin " to="/Link02">企業情報</nuxt-link>
        </li>
        <li>
          <nuxt-link class="tracking-widest font-thin " to="/Contact">お問い合わせ</nuxt-link>
        </li>
      </ul>
    </nav>
      </div>
    </header>
</template>

<script>

</script>

<style lang="scss" scoped>
header{
  background-color: rgba( #ffffff46, 0.1);
}
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
header.scroll-nav{
  background-color: rgba( #ffffff46, 0.4);
  border-bottom:2px solid #022444;
  padding-top: 1rem;
  padding-bottom: 1rem ;
  transition: 1s;
  h1{
  color: #022444;

  }
  nav{
    a{
  color: #022444;
transition: 1s;
    }

  }
}

@media screen and (max-width: 1199px) {
  /* スクリーンサイズが1199px以下の場合に適用 */
  header{
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  }
}
@media screen and (max-width: 767px) {
  /* スクリーンサイズが767px以下の場合に適用 */

  }
</style>

