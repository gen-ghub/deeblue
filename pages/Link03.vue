<template>
  <div class="contact">
    <div class="flex justify-center">
      <form class="p-contact__form text-2xl " name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">
        <input type="hidden" name="form-name" value="contact">
        <div class="p-contact__item flex flex-col">
          <label class="form-label pb-2" for="username">お名前</label>
          <input class="contact-input rounded" type="text" id="username" name="username" v-model="username" autocomplete="name">
        </div>
        <div class="p-contact__item flex flex-col">
          <label class="form-label pb-2" for="katakana">フリガナ</label>
          <input class="rounded" type="text" id="katakana" name="katakana" v-model="katakana">
        </div>
        <div class="p-contact__item flex flex-col">
          <label class="form-label pb-2" for="useremail">メールアドレス</label>
          <input class="rounded" type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email">
        </div>
        <div class="p-contact__item flex flex-col">
          <label class="form-label pb-2" for="message">お問い合わせ内容</label>
          <textarea class="rounded" id="message" name="message" v-model="message"></textarea>
        </div>
        <div class="p-contact__item" v-show="false">
          <label for="message">スパムでない場合は空欄</label>
          <input type="text" name="bot-field" v-model="botField"/>
        </div>
        <div class="p-contact__submit flex justify-center">
          <button class="rounded" type="submit">送信</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


</script>

<style lang="scss" scoped>

.contact {
  padding-top: 20vh;
  height: 92vh;
  background-color:#022444 ;
  color: #fff;
}
.contact-input{
  width: 20vw;
}
.p-contact__item{
  margin-bottom: 2vh;
}


</style>
