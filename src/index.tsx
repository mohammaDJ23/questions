import ReactDOM from 'react-dom/client';
import App from './App';
import { Router } from 'react-router-dom';
import Providers from './providers';
import { createBrowserHistory } from 'history';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router history={history}>
    <Providers>
      <App />
    </Providers>
  </Router>,
);
