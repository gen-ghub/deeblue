<template>
  <div>
      <div>
        <img class="link-img" src="~/assets/link1.jpg" />
      </div>
    <section class="business mb-10">
      <div class="grid grid-cols-12 ">
        <div class="col-start-2 col-span-10 mt-56">
          <div class="flex">
            <div class="title ">
              <h1 class="text-5xl font-black leading-relaxed">”体験”としてのサービス</h1>
            </div>
            <div class="title-txt ">
              <h1 class="text-4xl font-black leading-relaxed">これからの時代は<br>
              何を体験してくかが鍵</h1>
              <div class="mt-16">
                <p class="mb-1">これまでより更に急激に発達するこれからの社会</p>
                <p class="mb-1">AIの発達によりモノもより溢れ、製造自動化により価格も下がり物への価値は下がっていく。</p>
                <p class="mb-1">人も労働時間もより減っていき、週3日労働の将来すら現実味を帯びてきている。</p>
                <p class="mb-1">そんな時代に要求されるモノは”体験”へのサービスだと考えている。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="grid grid-cols-12 relative">
      <div class="absolute top-0 right-0 ">
        <img class="image-size" src="~/assets/bbq1.jpg" />
      </div>
      <div class="col-start-1 col-span-8 ">
        <div class="business-bg">
          <div class="mt-32 w-1/2 ml-32 ">
            <div class="py-20 text-white">
              <h1 class="pb-10 mt-24 text-4xl font-bold">「BBQ出張レンタル」</h1>
              <p class="text-sm w-3/4 mt-8 leading-loose tracking-widest">関東・関西の2拠点で幅広いエリアでBBQ用品を中心としたアウトドア用品の出張レンタルサービス。
              お客様の希望する場所・時間・内容で要望に応じた機材や食材をお届けしています。
              友達、会社、家族、様々なお客様に対応し、手ぶらでBBQを楽しんで頂けるサービスを提供しています。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-40 grid grid-cols-12 relative">
      <div class="absolute top-0 left-0 ">
        <img class="image-size" src="~/assets/biru.jpg" />
      </div>
      <div class="col-start-6 col-span-8 ">
        <div class="business-bg">
          <div class="mt-32 pl-32 pt-32">
            <div class="text-white pl-48 pt-20">
              <h1 class="pl-12 text-4xl font-bold">「生ビールサーバー</h1>
              <h1 class="pl-32 pb-10 text-4xl font-bold">出張レンタルサービス」</h1>
              <p class="pl-20 text-sm w-3/4 pt-8 leading-loose">会社、レンタルスペース、自宅にキャンプ場などどこでもキンキンに冷えた樽生ビールをお届けするサービス。
町のお祭りや懇親会、クリスマスや忘年会などでご利用頂けます。
</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-40 grid grid-cols-12 relative">
      <div class="absolute top-0 right-0 ">
        <img class="image-size" src="~/assets/camp.jpg" />
      </div>
      <div class="col-start-1 col-span-8 ">
        <div class="business-bg">
          <div class="mt-32 w-1/2 ml-32 ">
            <div class="py-20 text-white">
              <h1 class="pb-10 pt-2 mt-32 text-3xl font-bold">「公園バーベキュー管理事業」</h1>
              <p class="text-sm w-3/4 mt-8 leading-loose">滋賀県大津市、琵琶湖のほとりの大津市なぎさ公園の運営管理を大津市公園緑地協会より指定委託運営業者として行っております。
バーベキュー＆アウトドア用品レンタルに、SUPなどウォーターアクティビティーとしてのレンタルも行っております。
今後はキャンプ場としての運営も企画中。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-40 grid grid-cols-12 relative">
      <div class="absolute top-0 left-0 ">
        <img class="image-size" src="~/assets/a.jpg" />
      </div>
      <div class="col-start-6 col-span-8 ">
        <div class="business-bg">
          <div class="mt-32 pl-32 pt-32">
            <div class="text-white pl-48 pt-16">
              <h1 class="pl-12 text-4xl font-bold">「フラッシュモブ</h1>
              <h1 class="pl-32 pb-10 text-4xl font-bold">ダンス企画演出・撮影代行」</h1>
              <p class="pl-20 text-sm w-3/4 pt-8 leading-loose">結婚式をより盛り上げるサービス。
余興や演出企画代行としてダンスを生かしてフラッシュモブなど、様々な演出で結婚式や披露宴、二次会を盛り上げるお手伝いを行います。
撮影クルーによる企業の商品プロモーション撮影代行も行っております。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-40 h-full flex justify-center contact">
        <nuxt-link to="/Contact" class="block w-full flex justify-center m-2">
          <div>
            <h1 class="pt-32 pb-10">お問い合わせはこちらから</h1>
            <h3 class="pt-8 pb-32">　　　　Contact</h3>
          </div>
        </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.link-img{
  border-top: 8px solid #022444;
    height: 70vh;
    width: 100vw;
    object-fit: cover;
  }
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

.image-size{
  height: 70vh;
  width: 60vw;
  object-fit: cover;
}
.business-bg{
  background-color: #022444;
  height: 70vh;
}
.contact{
  :hover{
    background-color: #022444;
    color: white;
  }
}

</style>
