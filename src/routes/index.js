import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Login from '../components/login';
import Crud from '../components/crud';

const ContextPath = '/app';

export default (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect to={`${ContextPath}/login`} from={`${ContextPath}/`} exact />
                <Route path={`${ContextPath}/login`} exact component={() => <Login p="abc" />} />
                <Route path={`${ContextPath}/crud`} exact component={Crud} />
            </Switch>
        </BrowserRouter>
    )
}
