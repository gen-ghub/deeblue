<template>
    <header class="fixed z-20 pt-10 pb-8 w-full  text-white font-black tracking-widest business-header">
      <div class="grid lg:grid-cols-2 ">
        <div class="text-xl lg:text-3xl ml-8">
          <router-link to="/">
            <h1>DEEBLUE</h1>
          </router-link>
        </div>
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
</style>

