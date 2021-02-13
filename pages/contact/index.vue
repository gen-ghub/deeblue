<template>
  <section class="form-wrapper">
    <p>フォーム機能編集中</p>
    <validation-observer ref="observer" tag="form" class="flex flex-col" name="contact" method="POST" netlify data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <validation-provider v-slot="{ errors }" rules="required|max:100" name="お名前">
      <input
        class="mb-10"
        type="text"
        placeholder="お名前をご入力ください"
        name="name"
      />
      <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
      </validation-provider>
      <input
        class="mb-10"
        type="email"
        placeholder="ご返信の際にこちらのアドレスを使用します"
        name="address"
      />
      <div class="p-contact__item" v-show="false">
        <label for="message">スパムでない場合は空欄</label>
        <input type="text" name="bot-field" v-model="botField" />
      </div>
      <textarea
        class="mb-10"
        placeholder="お問い合わせ内容を入力してください。"
        name="message"
      />
      <input class="mb-10" type="submit" value="送信" />
    </validation-observer>
  </section>
</template>

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
