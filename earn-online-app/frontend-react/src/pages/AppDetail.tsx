import React from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../services/supabase';

const AppDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [appDetails, setAppDetails] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchAppDetails = async () => {
            try {
                const { data, error } = await supabase
                    .from('apps')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;

                setAppDetails(data);
            } catch (err) {
                setError('Failed to fetch app details');
            } finally {
                setLoading(false);
            }
        };

        fetchAppDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{appDetails.name}</h1>
            <p>{appDetails.description}</p>
            <p>Rewards: {appDetails.rewards}</p>
            <p>Category: {appDetails.category}</p>
            <a href={appDetails.link} target="_blank" rel="noopener noreferrer">Visit App</a>
        </div>
    );
};

export default AppDetail;