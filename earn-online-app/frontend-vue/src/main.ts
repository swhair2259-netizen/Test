import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createSupabaseClient } from './services/supabase';

const app = createApp(App);

const supabase = createSupabaseClient();
app.provide('supabase', supabase);

app.use(router);
app.mount('#app');