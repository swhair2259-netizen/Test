import React from 'react';

interface AppCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <div className="app-card">
            <img src={imageUrl} alt={title} className="app-card-image" />
            <h3 className="app-card-title">{title}</h3>
            <p className="app-card-description">{description}</p>
            <a href={link} className="app-card-link" target="_blank" rel="noopener noreferrer">
                Learn More
            </a>
        </div>
    );
};

export default AppCard;