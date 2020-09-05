import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { CONTEXT_PATH } from '../utils/constants';
import Login from '../components/login';
import Crud from '../components/crud';
import NotFound from '../components/404';
import Page from '../components/PageComponent';

export default (props) => {
    return (
        <BrowserRouter>
        <div className="routes-wrapper">
            <Switch>
                <Redirect to={`${CONTEXT_PATH}/login`} from={`${CONTEXT_PATH}/`} exact />
                <Route path={`${CONTEXT_PATH}/login`} exact component={() => <Login p="abc" />} />
                <Route path={`${CONTEXT_PATH}/crud`} exact component={(Crud)} />
                <Route path={`${CONTEXT_PATH}/page1`} exact component={() => <Page pn="react" />} />
                <Route path={`${CONTEXT_PATH}/page2`} exact component={() => <Page pn="google" />} />
                <Route component={NotFound} />
            </Switch>
        </div>
        </BrowserRouter>
    )
}
