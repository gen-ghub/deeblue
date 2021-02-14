<template>
  <header
    class="fixed z-20 pt-10 pb-8 w-full text-white tracking-widest font-thin font-serif"
  >
    <div class="flex">
      <div class="header-title">
        <nuxt-link to="/" class="text-4xl"> DEEBLUE </nuxt-link>
      </div>
      <nav class="header-nav">
        <ul class="test nav-ul flex items-center">
          <li class="nav-li">
            <nuxt-link class="tracking-widest font-thin" to="/Link01"
              >事業内容</nuxt-link
            >
          </li>
          <li class="nav-li">
            <nuxt-link class="tracking-widest font-thin" to="/Link02"
              >企業情報</nuxt-link
            >
          </li>
          <li class="nav-li">
            <nuxt-link class="tracking-widest font-thin" to="/Link03"
              >採用情報</nuxt-link
            >
          </li>
          <li class="nav-li">
            <nuxt-link class="tracking-widest font-thin" to="/contact"
              >お問い合わせ</nuxt-link
            >
          </li>
        </ul>
        <button
          class="mobile-menu-icon"
          onclick="document.querySelector('body').classList.toggle('open');"
          id="menu-open"
          v-on:click="flag = !flag"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div id="menu-bg" :class="{ open: flag }" v-on:click="flag = !flag">
          <nav id="menu-body" :class="{ open: flag }">
            <ul>
              <li v-for="menu in menus" :key="menu.title" class="menu-list">
                <nuxt-link
                  :to="menu.href"
                  v-html="menu.title"
                  class="menu-link"
                  onclick="document.querySelector('body').classList.toggle('open');"
                ></nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      menus: [
        { href: '/Link01', title: '事業内容' },
        { href: '/Link02', title: '企業情報' },
        { href: '/link03', title: '採用情報' },
        { href: '/contact', title: 'お問い合わせ' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#menu-open {
  display: none;
}
header {
  background-color: rgba(#ffffff46, 0.1);
  transition: 1s;
  width: 100vw;
}
.header-title {
  padding-left: 5vw;
}
.header-nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .nav-ul {
    font-size: 20px;
    height: 100%;
    padding-right: 3vw;
    .nav-li {
      margin-left: 2vw;
      height: 100%;
      padding-top: 8px;
    }
  }
}

header.scroll-nav {
  background-color: rgba(#ffffff46, 0.4);
  border-bottom: 2px solid #022444;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: 1s;
  a {
    color: #022444;
    transition: 1s;
  }
}
#menu-open {
  position: fixed;
  top: 6vw;
  right: 5vw;
  z-index: 9999;
}

#menu-bg {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;

  &.open {
    display: block;
  }
}

#menu-body {
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 9999;
  width: 63%;
  height: 100%;
  transform: translateX(100%);
  &.open {
    transform: translateX(0%);
  }
  .menu-list {
    margin-bottom: 10px;
    .menu-link {
      font-size: 30px;
      color: #fff;
    }
  }
}

@media screen and (max-width: 800px) {
  .test {
    display: none;
  }
  #menu-open {
    display: inline;
  }
  .mobile-menu-icon {
    background-color: unset;
    border: none;
    outline: none !important;
    cursor: pointer;

    & > span {
      background-color: Black;
      width: 40px;
      height: 3px;
      display: block;
      margin-bottom: 9px;
      transition: transform 0.7s;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .open {
    background-color: Black;

    & .mobile-menu-icon {
      & > span {
        background-color: White;

        &:nth-child(1) {
          transition-delay: 70ms;
          transform: translateY(12px) rotate(135deg);
        }
        &:nth-child(2) {
          transition-delay: 0s;
          transform: translateX(-18px) scaleX(0);
        }
        &:nth-child(3) {
          transition-delay: 140ms;
          transform: translateY(-12px) rotate(-135deg);
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  header {
    padding-top: 1.2rem;
    padding-bottom: 1rem;
  }
  header.scroll-nav {
    padding-top: 0.9rem;
    padding-bottom: 0.7rem;
  }
}
@media screen and (max-width: 425px) {
  header {
    .header-title {
      a {
        font-size: 20px;
      }
    }
  }
  header.scroll-nav {
    padding-top: 1rem;
    padding-bottom: 0.8rem;
    .header-title {
      a {
        font-size: 18px;
      }
    }
    border-bottom: 1px solid #022444;
  }
  #menu-open {
    top: 4vw;
    right: 5vw;
  }
  #menu-body {
    width: 63%;
    .menu-list {
      margin-bottom: 10px;
      .menu-link {
        font-size: 22px;
      }
    }
  }
}
</style>
