import { Route, Redirect, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import paths from './routes';
import { useError } from './hooks/use-error';
import { Routes } from './routes/types';

function App() {
  const {} = useError();

  return (
    <>
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

        <Redirect to={Routes.QUESTIONS} />
      </Switch>
    </>
  );
}

export default App;
