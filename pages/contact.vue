<template>
  <section class="contact-container border-b-2">
    <div class="flex justify-center ">
      <template v-if="!finished">
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" @submit.prevent>
          <p class="flex flex-col text-2xl mb-6">
            <label class="text-white pb-2">
              お名前
            </label>
              <input class="rounded" v-model="form.name" type="text" name="name" />
          </p>
          <p class="flex flex-col text-2xl mb-6">
            <label class="text-white pb-2">
              メールアドレス
            </label>
              <input class="rounded" v-model="form.email" type="email" name="email" />
          </p>
          <p class="flex flex-col text-2xl mb-8">
            <label class="text-white pb-2">
              お問い合わせ内容
            </label>
              <textarea class="rounded h-40" id="form-content" v-model="form.content" name="content" />
          </p>
          <div class="" v-show="false">
            <label for="message">スパムでない場合は空欄</label>
            <input type="text" name="bot-field" v-model="botField"/>
          </div>
          <p class="flex flex-col text-2xl">
            <button class="rounded text-white border border-light-blue-500 border-opacity-75 py-2  hover:bg-blue-900 " @click="handleSubmit" v-text="'送信'" />
          </p>
        </form>
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
<style>
.contact-container {
  padding-top: 20vh;
  height: 92vh;
  background-color:#022444 ;
}
p{
  padding: 10px;
}
</style>
