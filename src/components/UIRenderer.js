import { render as renderSchema } from 'amis';
import { useStore } from 'react-redux';
import { doGet, doPost } from '../actions/httpRequest';

export default (props) => {
    const store = useStore();
    let schema = props.schema || {};
    let fetcher = props.fetcher || (({url, method, data, responseType, config, headers}) => {
        // console.log(url, ';', method, ';', data, ';', config, ';', headers);
        return fetch(
            url,
            {
                body: data,
                headers: {
                    ...headers
                },
                method,
                config,
                mode: 'cors',
            }
        ).then(resp => {
            return resp.json();
        }).then(data => {
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