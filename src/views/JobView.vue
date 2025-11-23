<template>
  <div class="p-10">Job Page for job {{ currentJobId }}</div>
</template>

<script>
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
        return this.$route.params.id;
    }
  }
}
</script>
