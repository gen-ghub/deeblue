<template>
  <section class="summary grid lg:grid-cols-2 h-full">
      <section class="summary-left ">
        <div class="h-full flex flex-wrap content-center justify-center">
          <h1 class="text-6xl leading-loose tracking-widest font-thin font-serif">DEEBLUE</h1>
        </div>
      </section>
      <section class="summary-right bg-white">
        <div class="flex flex-col mt-20 pl-56 py-20">
          <section class="text-xl tracking-widest font-serif ">
            <p class="pb-16 leading-loose ">
              DEEBLUEは無くても良い会社です
            </p>
            <p class="pb-16 leading-loose">
              生きてく上で特に必要ではありません<br />
              何の真新しさもありません
            </p>
            <p class="pb-16 leading-loose">
              体験を通して関わらせて頂いた日が<br />
              その1日がいつもより少し充実し<br />
              幸せだったと思ってもらいたい
            </p>
            <p class="pb-16 leading-loose">
              そんなお手伝いができたらという<br />
              サービスを提供しています<br />
            </p>
          </section>
        </div>
      </section>
    </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.summary {
  height: 100%;

  .summary-left {
    background-color: #022444;
    color: #fff;
  }
  .summary-right {
  }
}

@media screen and (max-width: 1400px) {
  .summary-right div{
    padding-left: 10rem;
  }
}

@media screen and (max-width: 1200px) {
  .summary-right div{
    padding-left: 8rem;
  }
  .summary-left div h1{
    font-size: 2.75rem;
  }
}

@media screen and (max-width: 1022px) {
  .summary-right div{
    align-items: center;
    padding: 0;
  }
  .summary-left div{
    padding: 10rem 0;
  }
}

@media screen and (max-width: 740px) {
  .summary-left div{
    padding: 6rem 0;
  }
}

</style>

