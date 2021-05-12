import * as React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Main from '@/pages/main';
import Introduce from '@/pages/introduce';
import Projects from '@/pages/projects';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/introduce" component={Introduce} />
      <Route path="/projects" component={Projects} />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default Router;
