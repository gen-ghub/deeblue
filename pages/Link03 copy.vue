<template>
  <section class="contact-container border-b-2">
    <div class="flex justify-center ">
      <template v-if="!finished">
        <validation-observer class="from-wrapper" ref="observer" v-slot="{ invalid, validated }" tag="form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" @submit.prevent>
          <p class="flex flex-col text-2xl">
            <label class="text-white pb-2">
              お名前
            </label>
              <validation-provider v-slot="{ errors }" rules="required|max:100" name="お名前">
                <input class="contact-input" type="text" id="name" name="name" v-model="name" autocomplete="name">
                <p v-show="errors.length" class="p-contact_error text-white">{{ errors[0] }}</p>
              </validation-provider>
          </p>
          <p class="flex flex-col text-2xl ">
            <label class="text-white pb-2">
              メールアドレス
            </label>
              <validation-provider v-slot="{ errors }" rules="required|email|max:256" name="メールアドレス">
                <input class="contact-input" type="text" id="email" name="email" v-model="useremail" autocomplete="email">
                <p v-show="errors.length" class="p-contact_error text-white">{{ errors[0] }}</p>
              </validation-provider>
          </p>
          <p class="flex flex-col text-2xl mb-10">
            <label class="text-white pb-2">
              お問い合わせ内容
            </label>
              <validation-provider v-slot="{ errors }" rules="required|max:1000" name="お問い合わせ内容">
                <textarea class="contact-textarea" id="contact" name="contact" v-model="contact"></textarea>
                <p v-show="errors.length" class="p-contact_error text-white">{{ errors[0] }}</p>
              </validation-provider>
          </p>
          <div class="" v-show="false">
            <label for="message">スパムでない場合は空欄</label>
            <input type="text" name="bot-field" v-model="botField"/>
          </div>
          <p class="flex justify-center text-2xl">
            <button class="btn rounded text-white border border-light-blue-500 border-opacity-75 py-2 hover:bg-blue-900 " type="submit" :disabled="invalid || !validated" @click="handleSubmit" v-text="'送信'" />
          </p>
        </validation-observer>
      </template>
      <template v-else>
        <div class="text-4xl text-white p-20 contact-message">
          <p class="pc-message" v-text="'お問い合わせ頂きありがとうございました。'" />
          <p class="mobile-message" v-text="'お問い合わせ頂き'" />
          <p class="mobile-message" v-text="'ありがとうございました。'" />
          <div class="flex justify-center ">
            <nuxt-link class="rounded text-white mt-20 py-2 px-20 hover:bg-blue-900" to="/" v-text="'TOPへ'" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        contact: ''
      },
      finished: false
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
            ...this.form
          }),
          axiosConfig
        )
        .then(() => {
          this.finished = true
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.contact-message{
  height: 47vh;
}
.mobile-message{
  display: none;
}
.contact-container {
  padding-top: 20vh;
  padding-bottom: 10vh;
  background-color:#022444 ;
}
p{
  padding: 10px;
}
.from-wrapper{
  margin: auto;
}
.contact-input{
  width: 400px;
}
.contact-textarea{
  width: 600px;
  height: 30vh;
}
.p-contact_error{
  font-size: 16px;
}
.btn{
  width: 150px;
}
@media screen and (max-width: 768px){
.contact-message{
  font-size: 25px;
}
}
@media screen and (max-width: 767px){
  .contact-input{
  width: 300px;
}
.contact-textarea{
  width: 400px;
  height: 30vh;
}
}
@media screen and (max-width: 425px){
  .mobile-message{
    display: block;
    padding: 0;
  }
  .pc-message{
    display: none;
  }
  .contact-input{
  width: 80%;
}
.contact-container{
  height: 100%;
}
.contact-textarea{
  width: 100%;
  height: 30vh;
}
.p-contact_error{
  font-size: 12px;
}
.btn{
  width: 90px;
  font-size: 16px;
  padding: 5px 0;
}
.contact-message{
  font-size: 20px;
  padding-right: 0;
  padding-left: 0;
  div a{
    padding: 0;
  }
}
}
@media screen and (max-width: 320px){
  .contact-input{
  width: 70%;
}
.contact-textarea{
  width: 90%;
  height: 30vh;
}
.p-contact_error{
  font-size: 10px;
}
}
</style>
