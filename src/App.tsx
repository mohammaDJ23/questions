import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Providers from './providers';
import paths from './routes';
import './styles/index.css';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Switch>
          {paths.map(({ path, component }) => (
            <Route path={path} component={component} />
          ))}

          <Redirect to={'/questions'} />
        </Switch>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
