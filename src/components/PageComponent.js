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
            'http://localhost:1337/page/byPath/' + props.pn,
            );
            setSchema(result.data.data && result.data.data.schema || defaultSchema);
        };
        fetchData();
    }, []);
    return (
        <UIRenderer schema={schema} {...props}/>
    );
};
