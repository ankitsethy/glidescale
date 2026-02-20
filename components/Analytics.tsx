import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-F78PFR77QL';

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}

export const Analytics: React.FC = () => {
    useEffect(() => {
        // Skip in development to avoid polluting analytics
        if (import.meta.env.DEV) return;

        // Guard: don't inject twice
        if (document.getElementById('ga4-script')) return;

        // 1. Inject gtag.js loader
        const script = document.createElement('script');
        script.id = 'ga4-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // 2. Bootstrap dataLayer and send initial pageview once script loads
        window.dataLayer = window.dataLayer || [];
        window.gtag = function (...args: unknown[]) {
            window.dataLayer.push(args);
        };
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: true });
    }, []);

    return null;
};
