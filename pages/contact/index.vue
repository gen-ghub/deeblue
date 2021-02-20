<template>
  <section class="form-wrapper font-thin font-serif">
    <h1 class="contact-title flex justify-center font-bold text-white">
      お問い合わせページ
    </h1>
    <section class="flex justify-center">
        <validation-observer
          ref="observer"
          v-slot="{ invalid, validated }"
          tag="form"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          action="/mail-sent"
          netlify
        >
        <input type="hidden" name="form-name" value="contact" />
          <div class="contact_item flex flex-col">
            <label for="name" class="contact-label font-semibold">お名前</label>
            <validation-provider
              v-slot="{ errors }"
              rules="required|max:100"
              name="お名前"
            >
              <input
                id="name"
                name="name"
                v-model="name"
                class="text-box"
                type="text"
                placeholder="お名前をご入力ください"
              />
              <p v-show="errors.length" class="contact_error">{{ errors[0] }}</p>
            </validation-provider>
          </div>
          <div class="contact_item flex flex-col">
            <label for="email" class="contact-label font-semibold">メールアドレス</label>
            <validation-provider
              v-slot="{ errors }"
              rules="required|email|max:256"
              name="メールアドレス"
            >
              <input
                id="email"
                name="email"
                v-model="email"
                class="text-box"
                type="email"
                placeholder="ご返信の際にこちらのアドレスを使用します"
              />
              <p v-show="errors.length" class="contact_error">{{ errors[0] }}</p>
            </validation-provider>
          </div>
          <div class="contact_item flex flex-col">
            <label for="message" class="contact-label font-semibold">お問い合わせ内容</label>
            <validation-provider
              v-slot="{ errors }"
              rules="required|max:1000"
              name="お問い合わせ内容"
            >
              <textarea
                id="contact"
                name="contact"
                v-model="contact"
                class="contact-box"
                placeholder="お問い合わせ内容を入力してください。"
              />
              <p v-show="errors.length" class="contact_error">{{ errors[0] }}</p>
            </validation-provider>
          </div>
          <div class="" v-show="false">
            <input
              type="text"
              name="bot-field"
              v-model="botField"
              placeholder="スパムでない場合は空欄"
            />
          </div>
          <div class="flex justify-center">
            <button class="btn rounded-md" type="submit" :disabled="invalid || !validated">
            送信
          </button>
          </div>
        </validation-observer>
    </section>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      email: '',
      contact: '',
      botField: '',
      isSubmit: false,
      isSending: false,
      isError: false,
    }
  },
  computed: {
    sendingClass() {
      return {
        'is-sending': this.isSending,
        'is-error': this.isError,
        'is-complete': this.isSubmit,
      }
    },
  },
  methods: {
    onSubmit() {
      if (this.isSending) {
        return
      }
      this.isSending = true
      const params = new URLSearchParams()
      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)
      if (this.botField) {
        params.append('bot-field', this.botField)
      }
    },
    resetForm() {
      this.name = ''
      this.email = ''
      this.message = ''
      this.isError = false
      this.$refs.observer.reset()
    },
  },
}
</script>
<style lang="scss" scoped>
.mobile-contact-title {
  display: none;
}
.form-wrapper {
  padding: 20vh 20vw;
  background-color: #022444;
  height: 100%;
}
.contact-title {
  font-size: 30px;
  margin-bottom: 10vh;
}
.contact-label {
  font-size: 20px;
  color: #fff;
}
.text-box {
  width: 350px;
  height: 30px;
}
.contact-box {
  width: 500px;
  height: 300px;
}
.contact_item {
  margin-bottom: 25px;
}
.contact_error {
  color: #fff;
}
.btn {
  color: #fff;
  padding: 6px 20px;
  background: #022444;
  border: 1px solid #fff;
  &:hover {
    color: black;
    background-color: #fff;
    border: 1px solid black;
  }
}
@media screen and (max-width: 765px) {
  .contact-label {
    font-size: 16px;
  }
}
@media screen and (max-width: 425px) {
  .contact-title {
    font-size: 26px;
    margin-bottom: 6vh;
  }
  .text-box {
    width: 300px;
    height: 30px;
    font-size: 14px;
  }
  .contact-box {
    width: 300px;
    height: 300px;
    font-size: 14px;
  }
}
@media screen and (max-width: 375px) {
  .contact-title {
    font-size: 20px;
    margin-bottom: 6vh;
  }
}
@media screen and (max-width: 320px) {
  .text-box {
    width: 260px;
    height: 30px;
    font-size: 12px;
  }
  .contact-box {
    width: 260px;
    height: 260px;
    font-size: 12px;
  }
}
</style>
