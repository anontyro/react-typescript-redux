import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MainView} from 'src/views/MainView';

const AppRouter = () => {
  return (
    <Switch>
      <Route path={'/'} component={MainView} />
    </Switch>
  );
};

export default AppRouter;
