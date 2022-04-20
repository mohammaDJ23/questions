import { Route, Router, Redirect, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { createBrowserHistory } from 'history';
import Providers from './providers';
import paths from './routes';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Providers>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />

        <Switch>
          {paths.map(({ path, component }, i) => (
            <Route key={i} exact path={path} component={component} />
          ))}

          <Redirect to={'/questions'} />
        </Switch>
      </Providers>
    </Router>
  );
}

export default App;
