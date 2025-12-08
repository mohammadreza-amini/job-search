<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">
          {{ company }}
        </router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="h-full first:ml-0 ml-9">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center py-2.5">
          <profile-image v-if="userStore.isLoggedIn" />
          <action-button v-else @click="userStore.toggleLogged" text="Sign in" type="primary" />
        </div>
      </div>
      <the-subnav v-if="userStore.isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapStores } from 'pinia';
import { useUserStore } from '@/stores/user';

import ActionButton from '../Shared/ActionButton.vue'
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
      menuItems: [
        { text: 'Teams', url: '/' },
        { text: 'Location', url: '/' },
        { text: 'Life at MR Corp', url: '/' },
        { text: 'How We Hire', url: '/' },
        { text: 'Students', url: '/' },
        { text: 'jobs', url: '/jobs/results' },
      ],
    }
  },
  computed: {
    ...mapStores(useUserStore),
    headerHeightClass() {
      return {
        'h-16': !this.userStore.isLoggedIn,
        'h-32': this.userStore.isLoggedIn,
      }
    },
  },
}
</script>
