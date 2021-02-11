<template>
  <section class="form-wrapper">
    <form class="flex flex-col" name="contact" method="POST" netlify>
      <input type="hidden" name="form-name" value="contact" />
      <input
          class="mb-10"
          type="text"
          placeholder="お名前をご入力ください"
          name="name" />
      <input
          class="mb-10"
          type="email"
          placeholder="ご返信の際にこちらのアドレスを使用します"
          name="address" />
      <textarea
          class="mb-10"
          placeholder="お問い合わせ内容を入力してください。"
          name="message" />
      <input class="mb-10" type="submit" value="送信" />
    </form>
  </section>
</template>


<style lang="scss" scoped>
  .form-wrapper{
    padding: 20vh 20vw;
    background-color:  rgba(20, 23, 199, 0.664);
    height: 80vh;
    .mb-10{
      width: 400px;
    }
  }

</style>

