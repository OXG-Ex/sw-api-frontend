import React from 'react';
import { Preloader } from '../preloader/Preloader';

import './Background.scss';

export const Background: React.FC = () => {

    return <div id="app-background" >
        <Preloader />
    </div>;
};
