import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchApps = async () => {
    const { data, error } = await supabase
        .from('apps')
        .select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const addAppToWishlist = async (appId, userId) => {
    const { data, error } = await supabase
        .from('wishlists')
        .insert([{ app_id: appId, user_id: userId }]);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const fetchWishlist = async (userId) => {
    const { data, error } = await supabase
        .from('wishlists')
        .select('apps(*)')
        .eq('user_id', userId);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};