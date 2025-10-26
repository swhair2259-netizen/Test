<template>
  <div>
    <h1>Your Wishlist</h1>
    <ul>
      <li v-for="app in wishlist" :key="app.id">
        <h2>{{ app.name }}</h2>
        <p>{{ app.description }}</p>
        <button @click="removeFromWishlist(app.id)">Remove</button>
      </li>
    </ul>
    <h2>Add New App</h2>
    <input v-model="newAppName" placeholder="App Name" />
    <input v-model="newAppDescription" placeholder="App Description" />
    <button @click="addToWishlist">Add to Wishlist</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Wishlist',
  setup() {
    const wishlist = ref<{ id: number; name: string; description: string }[]>([]);
    const newAppName = ref('');
    const newAppDescription = ref('');

    const addToWishlist = () => {
      if (newAppName.value && newAppDescription.value) {
        wishlist.value.push({
          id: wishlist.value.length + 1,
          name: newAppName.value,
          description: newAppDescription.value,
        });
        newAppName.value = '';
        newAppDescription.value = '';
      }
    };

    const removeFromWishlist = (id: number) => {
      wishlist.value = wishlist.value.filter(app => app.id !== id);
    };

    return {
      wishlist,
      newAppName,
      newAppDescription,
      addToWishlist,
      removeFromWishlist,
    };
  },
});
</script>

<style scoped>
h1 {
  font-size: 2em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 1em 0;
}
button {
  margin-left: 1em;
}
</style>