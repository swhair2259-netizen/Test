import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

const Wishlist: React.FC = () => {
    const [wishlist, setWishlist] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchWishlist = async () => {
            const { data, error } = await supabase
                .from('wishlist')
                .select('*');

            if (error) {
                console.error('Error fetching wishlist:', error);
            } else {
                setWishlist(data);
            }
            setLoading(false);
        };

        fetchWishlist();
    }, []);

    const handleRemoveFromWishlist = async (appId: string) => {
        const { error } = await supabase
            .from('wishlist')
            .delete()
            .eq('id', appId);

        if (error) {
            console.error('Error removing from wishlist:', error);
        } else {
            setWishlist(wishlist.filter(app => app.id !== appId));
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishlist.map(app => (
                        <li key={app.id}>
                            {app.name}
                            <button onClick={() => handleRemoveFromWishlist(app.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;