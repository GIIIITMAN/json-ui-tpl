import React from 'react';
import UIRenderer from '../components/UIRenderer';

export default (schema) => {
    return (props) => {
        return (
            <UIRenderer schema={schema} {...props} />
        )
    }
}