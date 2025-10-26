import React from 'react';
import AppCard from './AppCard';

const AppList = ({ apps }) => {
    return (
        <div className="app-list">
            {apps.map(app => (
                <AppCard key={app.id} app={app} />
            ))}
        </div>
    );
};

export default AppList;