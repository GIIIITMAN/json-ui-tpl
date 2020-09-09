import { render as renderSchema } from 'amis';
import { useStore } from 'react-redux';
import axios from 'axios';
import { doGet, doPost } from '../actions/httpRequest';

export default (props) => {
    const store = useStore();
    let schema = props.schema || {};
    let fetcher = props.fetcher || (({url, method, data, responseType, config, headers}) => {
        console.log(url, ';', method, ';', data, ';', config, ';', headers);
        return axios(
            {
                url,
                data,
                headers: {
                    ...headers
                },
                method,
                ...config,
            }
        ).then(resp => resp.data).then(data => {
            switch (method) {
                case 'get':
                    store.dispatch(doGet({
                        data,
                    }));
                    break;
                case 'post':
                    store.dispatch(doPost({
                        data,
                    }));
                    break;
                default:
            }
            return {
                data
            };
        });

    });
    let notify = props.notify || (() => {});
    let alert = props.alert || window.alert;
    let confirm = props.fetcher || window.confirm;
    let theme = props.theme || 'default';

    let env = {
        fetcher,
        isCancel: value => !value,
        updateLocation: props.updateLocation || ((location, replace) => {
        }),
        isCurrentUrl: (to) => {
            return false;
        },
        jumpTo: props.jumpTo || ((to, action) => {
            console.log(action);
            console.log(window.location);
            let href = window.location.origin + to;
            window.location.href = href;
        }),
        notify,
        alert,
        confirm,
        theme,
    }

    return (
        renderSchema(
            schema,
            props,
            env,
        )
    )

}