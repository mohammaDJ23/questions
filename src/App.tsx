import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import paths from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {paths.map(({ path, component }) => (
          <Route path={path} component={component} />
        ))}

        <Redirect to={'/questions'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
