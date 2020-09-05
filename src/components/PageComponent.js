import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UIRenderer from '../components/UIRenderer';

const defaultSchema = {
    "type": "page",
    "title": "自生成",
    "body": {
        "type": "tpl",
        "tpl": "这是你刚刚新增的页面。"
    }
};

export default (props) => {
    const [schema, setSchema] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=' + props.pn,
            );
            setSchema(result.schema || defaultSchema);
        };
        fetchData();
    }, []);
    return (
        <UIRenderer schema={schema} {...props}/>
    );
};
