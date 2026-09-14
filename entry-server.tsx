import { renderToString } from 'react-dom/server';
import App from './App';

export { routes, SITE_URL } from './data/routes';

export const render = (path: string): string => renderToString(<App path={path} />);
