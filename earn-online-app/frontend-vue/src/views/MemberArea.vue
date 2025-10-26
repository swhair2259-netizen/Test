<template>
  <div class="member-area">
    <h1>Member Area</h1>
    <p>Welcome to your member area! Here you can manage your wishlist and explore apps.</p>

    <section>
      <h2>Your Wishlist</h2>
      <Wishlist />
    </section>

    <section>
      <h2>Explore Apps</h2>
      <AppList />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wishlist from '../components/Wishlist.vue';
import AppList from '../components/AppList.vue';

export default defineComponent({
  name: 'MemberArea',
  components: {
    Wishlist,
    AppList,
  },
});
</script>

<style scoped>
.member-area {
  padding: 20px;
}

h1 {
  color: #333;
}

h2 {
  margin-top: 20px;
  color: #555;
}
</style>