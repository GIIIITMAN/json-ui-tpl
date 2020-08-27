import React from 'react';
import { connect } from 'react-redux';
import schemaToComponent from '../utils/schemaToComponent';
import { CONTEXT_PATH } from '../utils/constants';

const schema = {
    "type": "page",
    "body": [{
        type: 'form',
        submitText: '登录',
        api: 'post:/api/login',
        wrapWithPanel: false,
        messages: {
            saveSuccess: '登录成功，欢迎光临！'
        },
        controls: [
            {
                children: (props) => (
                    <div className="list-group list-group-sm">
                        {props.renderFormItems({
                            controls: [
                                {
                                    name: 'username',
                                    children: (props) => (
                                        <div className="list-group-item">
                                            <input
                                                placeholder="用户名"
                                                type="text"
                                                className="form-control no-shadow no-border"
                                                value={props.value || ''}
                                                onChange={(e) => props.onChange(e.currentTarget.value)}
                                            />
                                        </div>
                                    )
                                },
                                {
                                    name: 'password',
                                    children: (props) => (
                                        <div className="list-group-item">
                                            <input
                                                placeholder="密码"
                                                type="password"
                                                className="form-control no-shadow no-border"
                                                value={props.value || ''}
                                                onChange={(e) => props.onChange(e.currentTarget.value)}
                                            />
                                        </div>
                                    )
                                }
                            ]
                        })}
                    </div>
                )
            },
            {
                type: 'submit',
                label: '登录',
                size: 'lg',
                inputClassName: 'block w-full',
                level: 'primary'
            }
        ]
    },
    {
        "label": "打开CRUD",
        "type": "button",
        "level": "info",
        "actionType": "link",
        "link": CONTEXT_PATH + "/crud"
    }]
};

const mapStateToProps = state => {
    return {
        data: {
            count: state.response.count
        }
    };
}

const mapDispatchToProps = dispatch => {
}

export default connect(mapStateToProps)(schemaToComponent(schema));