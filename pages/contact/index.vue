<template>
  <section>
    <section class="project-title center font-serif">
      <h1>お問い合わせ</h1>
    </section>
    <section class="py-40">
      <h2 class="center">お問い合わせ先はこちら</h2>
      <section class="mt-20">
        <h2 class="center tel-number font-bold">TEL:03-5957-0945</h2>
        <h3 class="center tel-time">（受付時間 9:00～20:00）</h3>
      <p class="center mt-10">冬季は休業中につき、電話受付が取り辛くなっております。</p>
      <p class="center">なお、配送や予約等は行っております。</p>
      </section>
      <div class="mt-10 flex justify-center">
        <img class="call-img" src="~/assets/call.png" />
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-title {
  height: 40vh;
  width: 100vw;
  background-color: rgba(#ccccccb0, 0.7);
  h1 {
    color: #022444;
    font-size: 30px;
    font-weight: 100;
    letter-spacing: 1vw;
  }
}
.call-img{
  height: 200px;
  width: 120px;
}
h2{
  font-size: 30px;
}
.tel-number{
  font-size: 50px;
}
.tel-time{
  font-size: 40px;
}
p{
  font-size: 16px;
}
@media screen and (max-width: 480px){
  .py-40{
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .project-title{
    height: 30vh;
    h1{
      font-size: 20px;
    }
  }
  h2{
  font-size: 25px;
}
  .tel-number{
  font-size: 40px;
}
.tel-time{
  font-size: 30px;
}
p{
  font-size: 14px;
}
}
@media screen and (max-width: 424px){
  .py-40{
    padding-top: 60px;
    padding-bottom: 100px;
  }
  .project-title{
    h1{
      font-size: 20px;
    }
  }
  h2{
  font-size: 20px;
}
.mt-20{
  margin-top: 60px;
}
  .tel-number{
  font-size: 30px;
}
.tel-time{
  font-size: 25px;
}
p{
  font-size: 10px;
}
.call-img{
  height: 150px;
  width: 100px;
}
}
</style>
