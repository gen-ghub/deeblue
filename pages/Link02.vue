
<template>
  <div>
    <section class="business">
      <img class="pt-2" src="~/assets/link2.jpg" />
      <div class="grid grid-cols-12 pt-24 text-white">
        <section class="col-start-2 col-span-4  ">
          <p class="">MISSION</p>
          <h1 class="mt-10 text-4xl font-black leading-relaxed">いつもより少し充実し、<br>
              幸せだったと思ってもらいたい。</h1>
        </section>
        <section class="col-start-7 col-span-5 h-64 ">
          <p class="mt-20 font-medium leading-loose">知性は、困難な課題を乗り越えるためにこそ存在する。知性の体現者であり続けることで、<br>
          世界に存在する多くの課題を解決できると信じています。</p>
        </section>
      </div>
    </section>
      <div class="grid grid-cols-12 pt-20 pb-16 ">
        <section class="col-start-2 col-span-4 h-64 ">
          <p class="">VISION</p>
          <h1 class="mt-10 text-4xl font-black leading-relaxed">先生から、<br>
              教育を変えていく。</h1>
        </section>
        <section class="col-start-7 col-span-5 h-64 ">
          <p class="mt-20 font-medium leading-loose">知性は、困難な課題を乗り越えるためにこそ存在する。知性の体現者であり続けることで、<br>
          世界に存在する多くの課題を解決できると信じています。</p>
        </section>
      </div>
      <div class="grid grid-cols-12 pt-24 pb-20 bg-gray-200">
        <section class="col-start-2 col-span-10 h-64 ">
          <p class="">VALUE</p>
          <div class=" flex space-x-8">
            <section class="py-12 ">
              <h1 class="text-lg font-semibold">先生ファースト</h1>
              <p class="pt-4 text-sm leading-loose">「先生のためになるか」迷ったら何度でも立ち返ろう。<br>
                  一人ひとりの先生に対峙することが、不可欠な価値を生む。</p>
            </section>
            <section class="py-12 pl-20">
              <h1 class="text-lg font-semibold">限界こそ出発点</h1>
              <p class="pt-4 text-sm leading-loose">自分の限界にぶつかってからが、真の仕事。<br>
                  限界を超えた人間だけが、信頼とチャンスを掴み取る。</p>
            </section>
            <section class="py-12 pl-24">
              <h1 class="text-lg font-semibold">摩擦が熱になる</h1>
              <p class="pt-4 text-sm leading-loose">相手を信じ、自分と異なる考えとぶつかり合おう。<br>
                  摩擦が熱を生み、物事を変えるエネルギーになる。</p>
            </section>
          </div>
        </section>
      </div>
      <div class="grid grid-cols-12 pt-40 pb-20 ">
        <section class="col-start-2 col-span-10  company">
          <div class="mb-10">
            <h1 class="text-6xl">COMPANY</h1>
          </div>
          <div class="pt-16 pb-6 ">
            <div class="w1/2 text-2xl">
              <dl class="flex">
                <dt class="w-40">会社名：</dt>
                <dd>株式会社DEEBLUE</dd>
              </dl>
              <dl class="flex mt-8">
                <dt class="w-40">設立：</dt>
                <dd>2013年2月</dd>
              </dl>
              <dl class="flex mt-8">
                <dt class="w-40">代表者：</dt>
                <dd>南里　次郎</dd>
              </dl>
              <dl class="flex mt-8">
                <dt class="w-40">事業内容：</dt>
                <dd>アウトドア用品レンタル事業、イベント事業</dd>
              </dl>
              <dl class="flex mt-8">
                <dt class="w-40">会社所在地：</dt>
                <dd>東京都豊島区上池袋1-11-5-1B</dd>
              </dl>
            </div>
          </div>
          <section class=" map">
          <img class="" src="~/assets/user.png" />
        </section>
        </section>

      </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.business{
  background-color: #022444;
  height: 118vh;
  img{
    height: 70vh;
    width: 100vw;
    object-fit: cover;
  }
}
.company{
  height: 80vh;
  position: relative;
}
.map{
  position: absolute;
  top: 0;
  right: 0;
  img{
    height: 630px;
    width: 680px;
    object-fit: cover;
  }
}
</style>
