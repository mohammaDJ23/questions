import { Route, Router, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Providers from './providers';
import paths from './routes';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Providers>
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
