<template>
  <div class="font-serif">
    <div class="project-title center">
      <h1>事業内容一覧</h1>
    </div>
    <section>
      <div class="center">
        <div>
          <p class="txt-center">OUTDOOR</p>
          <h1 class="title">アウトドア用品レンタル事業</h1>
        </div>
      </div>
      <section class="item-wrapper">
        <div class="image-wrapper">
          <img class="image-size" src="~/assets/bbq1.jpg" />
        </div>
        <div class="explanation-wrapper">
          <h1>BBQ出張レンタル</h1>
          <p>
            関東・関西2拠点の幅広いエリアでBBQ・アウトドア用品の出張レンタルサービス。<br />
            お客様の希望する場所・時間・内容で要望に応じた機材や食材をお届け。<br />
            友人、会社、家族、様々なお客様に対応し手ぶらでBBQを楽しめるサービス。<br />
          </p>
            <a class="btn" href="http://bbqdeli.jp/">バーベキューデリ</a>
            <a class="btn" href="http://www.bbq-ranger.com">バーベキュー隊</a>
        </div>
      </section>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.txt-center {
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  margin-top: 10vh;
  margin-bottom: 10px;
  color: rgba(#8600009c, 0.8);
}

.project-title {
  height: 40vh;
  width: 100vw;
  background-color: rgba(#ccccccb0, 0.7);
  h1 {
    color: #022444;
    font-size: 2vw;
    font-weight: 100;
    letter-spacing: 1vw;
  }
}

.title {
  font-size: 2vw;
  font-weight: 100;
  margin-bottom: 10vh;
}

.image-wrapper {

}

.image-size {
  height: 60vh;
  width: 40vw;
  object-fit: cover;
  margin-left: 3vw;
}

.item-wrapper {
  margin-top: 10vh;
  margin-bottom: 20vh;
  display: flex;
}
.explanation-wrapper {
  padding: 10vh 10vw;
  h1 {
    font-size: 2vw;
    margin-bottom: 5vh;
  }
  p {
    line-height: 40px;
    margin-bottom: 8vh;
  }
  .btn{
    margin-left: 50px;
  }
}
.btn{
  border: 1px solid black;
  padding: 15px 30px;
  &:hover{
    background-color: #022444;
    color: #fff;
  }
}
</style>
