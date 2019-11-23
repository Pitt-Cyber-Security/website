import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../body/home/Home';
import Team from '../body/team/Team';
import Event from '../body/event/Event';
import Project from '../body/project/Project';
import Lesson from '../body/lesson/Lesson';
import WriteUp from '../body/writeups/WriteUp';

function Routes() {
  return (
    <div className="title">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/events" component={Event} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/lessons" component={Lesson} />
        <Route exact path="/writeups" component={WriteUp} />
        <Route
          render={function() {
            return <p>Not Found</p>;
          }}
        />
      </Switch>
    </div>
  );
}

export default Routes;
