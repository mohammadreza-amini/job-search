<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }} </a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="h-full first:ml-0 ml-9">
              <a href="#" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center py-2.5">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @click="toggleLogged" text="Sign in" type="primary" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from './ActionButton.vue'
import ProfileImage from './ProfileImage.vue'
import TheSubnav from './TheSubnav.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      company: 'MR Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Location', 'Life at MR Corp', 'How We Hire', 'Students', 'jobs'],
      isLoggedIn: false,
    }
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn,
      }
    },
  },
  methods: {
    toggleLogged() {
      // this.isLoggedIn = true;
      this.isLoggedIn = !this.isLoggedIn
    },
  },
}
</script>
