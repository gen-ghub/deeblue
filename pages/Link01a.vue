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
          <div class="image-color"></div>
        </div>
        <div class="explanation-wrapper">
          <h1>BBQ出張レンタル</h1>
          <p>
            関東・関西2拠点の幅広いエリアで<span class="new-line"><br /></span>BBQ・アウトドア用品の出張レンタルサービス。<br />
            <span class="new-line"><br /></span>
            お客様の希望する場所・時間・内容で<span class="new-line"><br /></span>要望に応じた機材や食材をお届け。<br />
            <span class="new-line"><br /></span>
            友人、会社、家族、様々なお客様に対応し<span class="new-line"><br /></span>手ぶらでBBQを楽しめるサービス。<br />
          </p>
            <a class="btn" href="http://bbqdeli.jp/">バーベキューデリ</a>
            <a class="btn btn2" href="http://www.bbq-ranger.com">　バーベキュー隊　</a>
        </div>
      </section>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.new-line{
  display: none;
}

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
  position: relative;
  width: 50%;
  .image-color{
    margin-top: 17vh;
    height: 50vh;
    width: 30vw;
    background-color: #022444;
  }

  .image-size {
    position: absolute;
    bottom: 5vh;
    left: 0;
    height: 60vh;
    width: 40vw;
    object-fit: cover;
    margin-left: 3vw;
  }
}

.item-wrapper {
  margin-top: 10vh;
  margin-bottom: 20vh;
  display: flex;
}
.explanation-wrapper {
  padding: 10vh 0 10vw 0;
  h1 {
    font-size: 2vw;
    margin-bottom: 5vh;
  }
  p {
    line-height: 40px;
    margin-bottom: 8vh;
  }
  .btn2{
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


@media screen and (max-width: 1400px) {
  .explanation-wrapper {
  p {
    font-size: small;
  }
  .btn2{
    margin-left: 25px;
  }
}
}

@media screen and (max-width: 1023px) {
  .item-wrapper {
    margin-top: 0;
    margin-bottom: 0;
    flex-direction: column;
    justify-content: center;
  }
  .image-wrapper {
    width: 100vw;
    .image-color{
      margin-top: 12vh;
      margin-left: 5vw;
      height: 40vh;
      width: 70vw;
    }

    .image-size {
      bottom: 5vh;
      left: 10vw;
      height: 50vh;
      width: 80vw;
      margin-left: 0;
    }
  }
  .explanation-wrapper {
  padding: 10vh 0 10vw 0;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 5vw;
    margin-bottom: 2vh;
    }
    .btn2{
      margin-left: 50px;
    }
  }
  }

@media screen and (max-width: 425px) {
  .project-title {
  height: 18vh;
    h1 {
      font-size: 4vw;
    }
  }
  .title {
  margin-bottom: 10vh;
  }
  .txt-center {
    margin-top: 4vh;
    margin-bottom: 0;
  }
  .image-wrapper {
    .image-color{
      margin-top: 6vh;
      margin-left: 5vw;
      height: 25vh;
      width: 70vw;
    }
    .image-size {
      bottom: 2.5vh;
      left: 10vw;
      height: 30vh;
      width: 80vw;
    }
  }
  .explanation-wrapper {
    padding: 5vh 0 10vw 0;
  p {
    font-size: 10px;
    line-height: 30px;
    margin-bottom: 6vh;
  }
  .btn2{
    margin-left: 20px;
  }
}
.btn{
  padding: 10px 15px;
  font-size: 10px;
}
}

@media screen and (max-width: 375px) {
  .new-line{
  display: inline;
}
  .explanation-wrapper {
  p {
    margin: 0 10vw;
    font-size: 8px;
    line-height: 20px;
    margin-bottom: 6vh;
  }
  .btn2{
    margin-left: 20px;
  }
}
.btn{
  padding: 10px 15px;
  font-size: 10px;
}
}
</style>
