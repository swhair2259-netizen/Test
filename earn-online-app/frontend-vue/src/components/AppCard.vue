<template>
  <div class="app-card">
    <h3>{{ app.name }}</h3>
    <p>{{ app.description }}</p>
    <ul>
      <li v-if="app.surveys">Online Surveys: {{ app.surveys }}</li>
      <li v-if="app.signups">Signups and Rewards: {{ app.signups }}</li>
      <li v-if="app.quizzes">Learn and Earn Quizzes: {{ app.quizzes }}</li>
      <li v-if="app.cryptoGaming">Crypto and NFT Gaming: {{ app.cryptoGaming }}</li>
      <li v-if="app.earningEvidence">Earning Evidence: {{ app.earningEvidence }}</li>
      <li v-if="app.discounts">Discounts and Coupons: {{ app.discounts }}</li>
      <li v-if="app.referralLinks">Referral Links: {{ app.referralLinks }}</li>
      <li v-if="app.tips">Tips and Tricks: {{ app.tips }}</li>
    </ul>
    <button @click="addToWishlist">Add to Wishlist</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCard',
  props: {
    app: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToWishlist() {
      // Logic to add the app to the user's wishlist
      console.log(`${this.app.name} added to wishlist!`);
    }
  }
});
</script>

<style scoped>
.app-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: #f9f9f9;
}
.app-card h3 {
  margin: 0 0 8px;
}
.app-card ul {
  list-style-type: none;
  padding: 0;
}
.app-card button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.app-card button:hover {
  background-color: #0056b3;
}
</style>