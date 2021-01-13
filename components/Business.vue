<template>
  <section class="bg-gray-200 h-full pb-20 pt-10">
    <div class="">
      <section class="m-auto w-4/5">
        <h2 class="flex flex-wrap content-center justify-center h-40 text-2xl">
          事業内容（配置構想中）
        </h2>
      </section>
      <section class="">
        <div class="grid grid-cols-4">
          <div class="flex flex-wrap content-center justify-center">
            <section>
              <div class="itme rounded bg-gray-50 p-10 shadow-2xl">
                <div class="flex flex-wrap content-center justify-center mb-8">
                  <img class="h-56 w-56 rounded" src="~/assets/bbq1.jpg" />
                </div>
                <div class="flex flex-wrap content-center justify-center">
                  <nuxt-link to="/Link01a">
                    <h1 class="border border-blue-900 p-2 rounded text-black hover:bg-blue-900 hover:text-white transition duration-700">BBQ設備</h1>
                  </nuxt-link>
                </div>
              </div>
            </section>
          </div>
          <div class="flex flex-wrap content-center justify-center">
            <section>
              <div class="itme rounded bg-gray-50 p-10 shadow-2xl">
                <div class="flex flex-wrap content-center justify-center mb-8">
                  <img class="h-56 w-56 rounded" src="~/assets/biru.jpg" />
                </div>
                <div class="flex flex-wrap content-center justify-center">
                  <nuxt-link to="/Link01a">
                    <h1 class="border border-blue-900 p-2 rounded text-black hover:bg-blue-900 hover:text-white transition duration-700">ビールデリバリー</h1>
                  </nuxt-link>
                </div>
              </div>
            </section>
          </div>
          <div class="flex flex-wrap content-center justify-center">
            <section>
              <div class="itme rounded bg-gray-50 p-10 shadow-2xl">
                <div class="flex flex-wrap content-center justify-center mb-8">
                  <img class="h-56 w-56 rounded" src="~/assets/a.jpg" />
                </div>
                <div class="flex flex-wrap content-center justify-center">
                  <nuxt-link to="/Link01a">
                    <h1 class="border border-blue-900 p-2 rounded text-black hover:bg-blue-900 hover:text-white transition duration-700">ブライダル</h1>
                  </nuxt-link>
                </div>
              </div>
            </section>
          </div>
          <div class="flex flex-wrap content-center justify-center">
            <section>
              <div class="itme rounded bg-gray-50 p-10 shadow-2xl">
                <div class="flex flex-wrap content-center justify-center mb-8">
                    <img class="h-56 w-56 rounded" src="~/assets/camp.jpg" />
                </div>
                <div class="flex flex-wrap content-center justify-center">
                  <nuxt-link to="/Link01a">
                    <h1 class="border border-blue-900 p-2 rounded text-black hover:bg-blue-900 hover:text-white transition duration-700">キャンプ場管理</h1>
                  </nuxt-link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.itme {
  background-color: white;
}
</style>
