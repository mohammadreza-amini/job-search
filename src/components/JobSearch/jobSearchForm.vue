<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchForJobS"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-1 h-full flex-nowrap text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <TextInput placeholder="Software Engineer" v-model="role" />
      </div>

      <span
        class="flex item-center items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in
      </span>

      <div class="flex h-full flex-1 relative items-center pl-3">
        <label class="absolute left-3 -top-10">Where?</label>
        <TextInput placeholder="Los Angeles" v-model="location" />
      </div>
    </div>

    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import { icon } from '@fortawesome/fontawesome-svg-core'
import ActionButton from '../Shared/ActionButton.vue'
import TextInput from '../Shared/TextInput.vue'

export default {
  name: 'jobSearchForm',
  components: { ActionButton, TextInput },
  data() {
    return {
      role: '',
      location: '',
    }
  },
  methods: {
    searchForJobS() {
      this.$router.push({
        name: 'JobResults',
        query: {role: this.role, location: this.location},
      })
    },
  },
}
</script>
