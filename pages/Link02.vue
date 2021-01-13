<template>
  <div>
    <section class="business">
      <img class="pt-2" src="~/assets/link2.jpg" />
      <div class="grid grid-cols-12 pt-24 text-white">
        <section class="col-start-2 col-span-4">
          <p class="">MISSION</p>
          <h1 class="mt-10 text-4xl font-black leading-relaxed">
            いつもより少し充実し、<br />
            幸せだったと思ってもらいたい。
          </h1>
        </section>
        <section class="col-start-7 col-span-5 h-64">
          <p class="mt-20 font-medium leading-loose">
            知性は、困難な課題を乗り越えるためにこそ存在する。知性の体現者であり続けることで、<br />
            世界に存在する多くの課題を解決できると信じています。
          </p>
        </section>
      </div>
    </section>
    <div class="grid grid-cols-12 pt-20 pb-16">
      <section class="col-start-2 col-span-4 h-64">
        <p class="">VISION</p>
        <h1 class="mt-10 text-4xl font-black leading-relaxed">
          先生から、<br />
          教育を変えていく。
        </h1>
      </section>
      <section class="col-start-7 col-span-5 h-64">
        <p class="mt-20 font-medium leading-loose">
          知性は、困難な課題を乗り越えるためにこそ存在する。知性の体現者であり続けることで、<br />
          世界に存在する多くの課題を解決できると信じています。
        </p>
      </section>
    </div>
    <div class="pc-company grid grid-cols-12 pt-24 pb-20 bg-gray-200">
      <section class="col-start-2 col-span-10 h-64">
        <p class="">VALUE</p>
        <div class="flex space-x-8">
          <section class="py-12">
            <h1 class="text-lg font-semibold">先生ファースト</h1>
            <p class="pt-4 text-sm leading-loose">
              「先生のためになるか」迷ったら何度でも立ち返ろう。<br />
              一人ひとりの先生に対峙することが、不可欠な価値を生む。
            </p>
          </section>
          <section class="py-12 pl-20">
            <h1 class="text-lg font-semibold">限界こそ出発点</h1>
            <p class="pt-4 text-sm leading-loose">
              自分の限界にぶつかってからが、真の仕事。<br />
              限界を超えた人間だけが、信頼とチャンスを掴み取る。
            </p>
          </section>
          <section class="py-12 pl-24">
            <h1 class="text-lg font-semibold">摩擦が熱になる</h1>
            <p class="pt-4 text-sm leading-loose">
              相手を信じ、自分と異なる考えとぶつかり合おう。<br />
              摩擦が熱を生み、物事を変えるエネルギーになる。
            </p>
          </section>
        </div>
      </section>
    </div>
    <div class="pc-company company-wrapper pt-40 pb-20">
      <div class="flex justify-center">
        <h1 class="text-6xl">COMPANY</h1>
      </div>
      <section class="mt-32 company flex justify-around">
        <div class="company-div pb-6">
          <div class="w1/2">
            <dl class="flex">
              <dt class="w-40">会社名：</dt>
              <dd>株式会社DEEBLUE</dd>
            </dl>
            <dl class="flex mt-20">
              <dt class="w-40">設立：</dt>
              <dd>2013年2月</dd>
            </dl>
            <dl class="flex mt-20">
              <dt class="w-40">代表者：</dt>
              <dd>南里　次郎</dd>
            </dl>
            <dl class="flex mt-20">
              <dt class="w-40">事業内容：</dt>
              <dd>アウトドア用品レンタル事業、イベント事業</dd>
            </dl>
            <dl class="flex mt-20">
              <dt class="w-40">会社所在地：</dt>
              <dd>東京都豊島区上池袋1-11-5-1B</dd>
            </dl>
          </div>
        </div>
        <section class="map">
          <img class="" src="~/assets/user.png" />
        </section>
      </section>
    </div>
    <div class="phone-company company-wrapper flex justify-center">
      <section class="company ">
        <div class="flex justify-center">
          <h1 class="">COMPANY</h1>
        </div>
        <section class="map flex justify-center">
          <img class="company-img" src="~/assets/user.png" />
        </section>
        <div class="flex justify-center">
          <div class="company-div ">
            <dl class="flex">
              <dt class="">会社名：</dt>
              <dd>株式会社DEEBLUE</dd>
            </dl>
            <dl class="flex mt-4">
              <dt class="">設立：</dt>
              <dd>2013年2月</dd>
            </dl>
            <dl class="flex mt-4">
              <dt class="">代表者：</dt>
              <dd>南里　次郎</dd>
            </dl>
            <dl class="flex mt-4">
              <dt class="">事業内容：</dt>
              <dd>アウトドア用品レンタル事業<br>
              イベント事業</dd>
            </dl>
            <dl class="flex mt-4">
              <dt class="">会社所在地：</dt>
              <dd>東京都豊島区上池袋1-11-5-1B</dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.phone-company {
  display: none;
}
.business {
  background-color: #022444;
  height: 118vh;
  img {
    height: 70vh;
    width: 100vw;
    object-fit: cover;
  }
}
.company {
  font-size: 25px;
}
.map {
  img {
    height: 60vh;
    width: 35vw;
    object-fit: cover;
  }
}

@media screen and (max-width: 1024px) {
  .company-wrapper {
    padding-top: 4rem;
  }
  .company {
    font-size: 15px;
    margin-top: 4rem;
    dt {
      width: 8rem;
    }
    dl{
      margin-top: 2.5rem;
    }
  }
  .map {
    img {
      height: 50vh;
      width: 40vw;
    }
  }
}
@media screen and (max-width: 768px) {
  .company {
    font-size: 14px;
    margin-top: 2rem;
    .company-div {
      padding-top: 2rem;
    }
    dt {
      width: 6rem;
    }
    dd {
      font-size: 12px;
    }
  }
  .map {
    img {
      height: 40vh;
      width: 40vw;
    }
  }
}
@media screen and (max-width: 425px) {
  .pc-company {
    display: none;
  }
  .phone-company {
    display: block;
    .company{
      margin-bottom: 8vh;
      h1{
        padding: 5vh 0;
        font-size: 30px;
      }
      .company-img{
        height: 20vh;
        width: 60vw;
        object-fit: cover;
      }
    }
  }
}
</style>
