<template>
  <section class="business mb-10">
      <div class="grid grid-cols-12 ">
        <div class="business-container col-start-2 col-span-10 mt-56">
          <div class="flex">
            <div class="title ">
              <h1 class="text-5xl font-black leading-relaxed">”体験”としてのサービス</h1>
            </div>
            <div class="title-txt ">
              <h1 class="text-4xl font-black leading-relaxed">これからの時代は<br>
              何を体験してくかが鍵</h1>
              <div class="mt-16">
                <p class="mb-1">これまでより更に急激に発達するこれからの社会。</p>
                <p class="mb-1">AIの発達によりモノもより溢れ、製造自動化により価格も下がり物への価値は下がっていく。</p>
                <p class="mb-1">人も労働時間もより減っていき、週3日労働の将来すら現実味を帯びてきている。</p>
                <p class="mb-1">そんな時代に要求されるモノは”体験”へのサービスだと考えている。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>


<style lang="scss" scoped>
.business{
  background-color: #fff;
  height: 80vh;

}
.title{
  width: 45vw;
  h1{
    margin-top: 15vh;
  }
}
.title-txt{
  width: 55vw;
  margin-left: 7vw;
}

@media screen and (max-width: 1440px) {
  .title{
    h1{
      font-size: 2.25rem;
    }
  }
  .title-txt{
    margin-left: 5vw;
    h1{
      font-size: 1.875rem;
    }
    p{
      // margin-bottom: 0;
      font-size: 0.875rem;
    }
  }
}

@media screen and (max-width: 1022px) {
  .business{
    margin-bottom: 0;
    height: 70vh;
}
  .business-container{
    margin-top: 7rem;
  }
  .title{
    h1{
      font-size: 1.875rem;
      margin-top: 8vh;
    }
  }
  .title-txt{
    margin-left: 2vw;
    div{
      margin-top: 2.5rem;
    }
    h1{
      font-size: 1.5rem;
    }
    p{
      margin-bottom: 0;
      font-size: 0.875rem;
    }
  }
}

</style>

