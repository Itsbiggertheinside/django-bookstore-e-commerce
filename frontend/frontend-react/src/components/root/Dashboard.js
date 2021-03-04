import React, { Component } from 'react';
import Main from '../partials/Main';
import PageNavbar from '../partials/PageNavbar';
import PageFooter from '../partials/PageFooter';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <PageNavbar />
                <Main />
                <PageFooter />
            </div>
        )
    }
}


export default Dashboard