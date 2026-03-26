import React from 'react';import
import {appRouter} from './router/app.router';

export const ProfessionalApp = () => {
    return (
        <div className='bf-gradient'>
            <RouterProvider router={appRouter}/>
        </div>
    );
};
