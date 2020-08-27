import * as React from 'react';
import { Link } from "react-router-dom";
import { NotFound } from 'amis';
import { CONTEXT_PATH } from '../utils/constants';

export default () => (
    <NotFound
        links={(
            <Link to={CONTEXT_PATH} className="list-group-item text-primary">
                <i className="fa fa-chevron-right text-muted" />
                <i className="fa fa-fw fa-mail-forward m-r-xs" />
                去首页
            </Link>
        )}
        footerText={"fooooooooooooooot"}
    />
);