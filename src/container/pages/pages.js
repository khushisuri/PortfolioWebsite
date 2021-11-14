import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import '../pages/pages.css';
import PageComp from '../../component/page/page';
import NavComp from '../../component/nav/nav';
import Work from '../../container/pages/work/work';
import SlidesComp from '../../container/slides/slides';
import TemplateComp from '../../component/template/artstylesheet/artstylesheet';
import WhoComp from '../../component/who/who';
import ContactComp from '../../container/contact/contact';

class Pages extends Component {
  render() {
    return (
      <div>
        <NavComp />
        <div className="pages">
          <Switch>
            <Route path="/contact" component={ContactComp} />
            <Route path="/template" component={TemplateComp} />
            <Route exact path="/work" component={Work} />
            <Route path="/who" component={WhoComp} />
            <Route path="/page" component={PageComp} />
            <Route path="/work/:id" component={SlidesComp} />
            <Route path="/certificate/:id" component={SlidesComp} />
            <Redirect from="/" to="/page" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Pages;
