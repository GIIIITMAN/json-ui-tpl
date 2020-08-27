import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Login from '../components/login';
import Crud from '../components/crud';
import { CONTEXT_PATH } from '../utils/constants';

export default (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect to={`${CONTEXT_PATH}/login`} from={`${CONTEXT_PATH}/`} exact />
                <Route path={`${CONTEXT_PATH}/login`} exact component={() => <Login p="abc" />} />
                <Route path={`${CONTEXT_PATH}/crud`} exact component={(Crud)} />
            </Switch>
        </BrowserRouter>
    )
}
