import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AboutView} from '../views/AboutView';
import MainView from '../views/MainView';
import ChatView from '../views/ChatView';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact={true} path={'/'} component={MainView} />
      <Route path={'/chat'} component={ChatView} />
      <Route path={'/about'} component={AboutView} />
    </Switch>
  );
};

export default AppRouter;
