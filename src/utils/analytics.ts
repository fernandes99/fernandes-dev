import { config } from '@/config/general';
import ReactGA from 'react-ga4';

export const initializeGA = () => {
    if (config.env !== 'production') {
        ReactGA.initialize(config.tokens.GA);
    }
};

export const sendGAEvent = (category: string, label: string, action = 'click') => {
    ReactGA.event({ category, action, label });
};
