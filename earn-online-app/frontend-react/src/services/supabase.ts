import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchApps = async () => {
    const { data, error } = await supabase
        .from('apps')
        .select('*');
    if (error) throw new Error(error.message);
    return data;
};

export const addAppToWishlist = async (appId, userId) => {
    const { data, error } = await supabase
        .from('wishlists')
        .insert([{ app_id: appId, user_id: userId }]);
    if (error) throw new Error(error.message);
    return data;
};

export const fetchWishlist = async (userId) => {
    const { data, error } = await supabase
        .from('wishlists')
        .select('apps(*)')
        .eq('user_id', userId);
    if (error) throw new Error(error.message);
    return data;
};