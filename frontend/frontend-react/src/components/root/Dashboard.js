import React, { Component } from 'react';
import Main from '../partials/Main';
import PageNavbar from '../partials/PageNavbar';
import PageFooter from '../partials/PageFooter';
import DetailPage from '../detailpage/DetailPage';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <PageNavbar />
                <Router>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='detail/:name' component={DetailPage} />
                    </Switch>
                </Router>
                <PageFooter />
            </div>
        )
    }
}


export default Dashboard