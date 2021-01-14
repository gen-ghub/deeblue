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
                <input class="contact-input" type="text" id="username" name="username" v-model="username" autocomplete="name">
                <p v-show="errors.length" class="p-contact_error text-white">{{ errors[0] }}</p>
              </validation-provider>
          </p>
          <p class="flex flex-col text-2xl ">
            <label class="text-white pb-2">
              メールアドレス
            </label>
              <validation-provider v-slot="{ errors }" rules="required|email|max:256" name="メールアドレス">
                <input class="contact-input" type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email">
                <p v-show="errors.length" class="p-contact_error text-white">{{ errors[0] }}</p>
              </validation-provider>
          </p>
          <p class="flex flex-col text-2xl mb-10">
            <label class="text-white pb-2">
              お問い合わせ内容
            </label>
              <validation-provider v-slot="{ errors }" rules="required|max:1000" name="お問い合わせ内容">
                <textarea class="contact-textarea" id="message" name="message" v-model="message"></textarea>
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
        <div class="text-4xl text-white p-20">
          <p v-text="'お問い合わせ頂きありがとうございました。'" />
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
        content: ''
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
  width: 20vw;
}
.contact-textarea{
  width: 30vw;
  height: 20vh;
}
.p-contact_error{
  font-size: 16px;
}
.btn{
  width: 10vw;
}
</style>
