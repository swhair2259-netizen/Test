import React from 'react';
import AppList from '../components/AppList';
import Wishlist from '../components/Wishlist';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Discover New Ways to Earn Money Online!</h1>
            <p>
                Hey there! Are you looking for ways to earn some extra money online? 
                I've discovered a fantastic resource that I'd love to share with you!
            </p>
            <p>
                What sets this site apart is that it's compiled based on my own research and testing. 
                I've tried out various opportunities and outlined which ones are worth your time and which ones aren't.
            </p>
            <h2>Opportunities to Earn Money Online:</h2>
            <AppList />
            <h2>Your Wishlist:</h2>
            <Wishlist />
        </div>
    );
};

export default Home;