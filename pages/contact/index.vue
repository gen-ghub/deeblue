<template>
  <section class="form-wrapper">
    <p>フォーム機能編集中</p>
    <validation-observer
      ref="observer"
      v-slot="{ invalid, validated }"
      tag="form"
      class="flex flex-col"
      name="contact"
      method="POST"
      netlify
      data-netlify-honeypot="bot-field"
      action="mail-sent"
      :class="sendingClass"
    >
      <input type="hidden" name="form-name" value="contact" />
      <validation-provider
        v-slot="{ errors }"
        rules="required|max:100"
        name="お名前"
      >
        <input
          id="name"
          name="name"
          v-model="name"
          class="mb-10"
          type="text"
          placeholder="お名前をご入力ください"
        />
        <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        rules="required|email|max:256"
        name="メールアドレス"
      >
        <input
          id="email"
          name="email"
          v-model="email"
          class="mb-10"
          type="email"
          placeholder="ご返信の際にこちらのアドレスを使用します"
        />
        <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        rules="required|max:1000"
        name="お問い合わせ内容"
      >
        <textarea
          id="message"
          name="message"
          v-model="message"
          class="mb-10"
          placeholder="お問い合わせ内容を入力してください。"
        />
        <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
      </validation-provider>
      <div class="p-contact__item" v-show="false">
        <input type="text" name="bot-field" v-model="botField" placeholder="スパムでない場合は空欄" />
      </div>
      <button class="mb-10" type="submit" :disabled="invalid || !validated">
        送信
      </button>
    </validation-observer>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        name        : '',
        email       : '',
        message         : '',
        botField        : '',
        isSubmit        : false,
        isSending       : false,
        isError         : false,
        completeMessage : '',
      }
    },
    computed: {
      sendingClass(){
        return {
          'is-sending'  : this.isSending,
          'is-error'    : this.isError,
          'is-complete' : this.isSubmit
        };
      }
    },
    methods: {
      onSubmit() {
        if(this.isSending){
          return;
        }
        this.isSending = true;
        this.completeMessage = '送信処理中…';
        const params = new URLSearchParams();
        params.append('form-name', 'contact');
        params.append('name', this.name);
        params.append('email', this.email);
        params.append('message', this.message);
        if(this.botField){
          params.append('bot-field', this.botField);
        }
        this.$axios
        .$post('/', params)
        .then(() => {
          this.completeMessage = 'お問い合わせを送信しました！';
          this.resetForm();
          this.isSubmit  = true;
        })
        .catch(err => {
          this.completeMessage = 'お問い合わせの送信が失敗しました';
          this.isError   = true;
        })
        .finally(() => {
          this.isSending = false;
        });
      },

      resetForm() {
        this.name        = '';
        this.email       = '';
        this.message         = '';
        this.isError         = false;
        this.$refs.observer.reset();
      }
    }
  }
</script>


<style lang="scss" scoped>
.form-wrapper {
  padding: 20vh 20vw;
  background-color: rgba(20, 23, 199, 0.664);
  height: 80vh;
  .mb-10 {
    width: 400px;
  }
}
</style>
