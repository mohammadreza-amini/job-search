<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            class="object-contain rounded-2xl"
            src="../image/logo.png"
            style="width: 400px"
            alt="logo"
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from './TheHeadline.vue'
import jobSearchForm from './jobSearchForm.vue'

export default {
  name: 'The Hero',
  components: {
    TheHeadline,
    jobSearchForm,
  },
}
</script>
