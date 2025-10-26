import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import Wishlist from '../components/Wishlist';

const MemberArea: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = supabase.auth.session();
        setUser(session?.user || null);
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return (
            <div>
                <h2>Please log in to access your member area.</h2>
            </div>
        );
    }

    return (
        <div>
            <h2>Welcome, {user.email}!</h2>
            <Wishlist />
        </div>
    );
};

export default MemberArea;