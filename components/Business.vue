<template>
  <section class="bg-gray-200 h-full pb-20 pt-10">
    <div class="">
      <section class="m-auto w-4/5">
        <h2 class="flex flex-wrap content-center justify-center h-40 text-2xl">
          SERVICE
        </h2>
      </section>
      <section class="">
        <div class="grid grid-cols-4">
          <div class="flex flex-wrap content-center justify-center">
            <section>
              <div class="itme rounded bg-gray-50 p-5 shadow-2xl">
                <div class="flex flex-wrap content-center justify-center mb-8">
                  <img class="rounded" src="~/assets/bbq1.jpg" />
                </div>
                <div class="flex flex-wrap content-center justify-center">
                  <nuxt-link to="/Link01" class="btn-h1 border border-blue-900 rounded text-black hover:bg-blue-900 hover:text-white transition duration-700">
                    　 BBQ 　
                  </nuxt-link>
                </div>
              </div>
            </section>
          </div>
          <div class="flex flex-wrap content-center justify-center">
            <section>
              <div class="itme rounded bg-gray-50 p-5 shadow-2xl">
                <div class="flex flex-wrap content-center justify-center mb-8">
                  <img class=" rounded" src="~/assets/biru.jpg" />
                </div>
                <div class="flex flex-wrap content-center justify-center">
                  <nuxt-link to="/Link01" class="btn-h1 border border-blue-900 rounded text-black hover:bg-blue-900 hover:text-white transition duration-700">
                    　BEER　
                  </nuxt-link>
                </div>
              </div>
            </section>
          </div>
          <div class="flex flex-wrap content-center justify-center">
            <section>
              <div class="itme rounded bg-gray-50 p-5 shadow-2xl">
                <div class="flex flex-wrap content-center justify-center mb-8">
                  <img class=" rounded" src="~/assets/a.jpg" />
                </div>
                <div class="flex flex-wrap content-center justify-center">
                  <nuxt-link to="/Link01" class="btn-h1 border border-blue-900 rounded text-black hover:bg-blue-900 hover:text-white transition duration-700">
                    　BRIDAL　
                  </nuxt-link>
                </div>
              </div>
            </section>
          </div>
          <div class="flex flex-wrap content-center justify-center">
            <section>
              <div class="itme rounded bg-gray-50 p-5 shadow-2xl">
                <div class="flex flex-wrap content-center justify-center mb-8">
                    <img class=" rounded" src="~/assets/camp.jpg" />
                </div>
                <div class="flex flex-wrap content-center justify-center">
                  <nuxt-link to="/Link01" class="btn-h1 border border-blue-900 rounded text-black hover:bg-blue-900 hover:text-white transition duration-700">
                    　PARK　
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
img{
  object-fit: cover;
  height: 300px;
  width: 300px;
}
.btn-h1{
  padding: 8px 20px;
}
@media screen and (max-width: 1400px){
img{
  height: 250px;
  width: 250px;
}
}
@media screen and (max-width: 1024px){
.grid-cols-4 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.itme {
  margin: 20px;
}
img{
  height: 18rem;
  width: 20rem;
}
}
@media screen and (max-width: 767px){
.grid-cols-4 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.itme {
  margin: 20px;
}
img{
  height: 18rem;
  width: 20rem;
}
}
@media screen and (max-width: 425px){
img{
  height: 16rem;
  width: 18rem;
}
}
@media screen and (max-width: 375px){
img{
  height: 12rem;
  width: 16rem;
}
}
@media screen and (max-width: 320px){
img{
  height: 10rem;
  width: 14rem;
}
}
</style>

