import schemaToComponent from '../utils/schemaToComponent';
import { connect } from 'react-redux';

const schema = {
    "$schema": "https://houtai.baidu.com/v2/schemas/page.json#",
    "type": "page",
    "title": "Demo",
    "body": [
        {
            "type": "tpl",
            "tpl": "初始页面"
        },
        {
            "type": "crud",
            "api": "https://houtai.baidu.com/api/sample?waitSeconds=1&orderBy=id&orderDir=desc",
            "mode": "table",
            "messages": {
                "fetchSuccess": "good day"
            },
            "itemActions": [
                {
                    "label": "删除",
                    "type": "button",
                    "size": "sm",
                    "actionType": "ajax",
                    "api": "post:/api/delete/${id}",
                    "className": "",
                    "iconClassName": "",
                    "hiddenOnHover": false,
                    "level": "default"
                }
            ],
            "columns": [
                {
                    "name": "id",
                    "label": "ID",
                    "type": "text"
                },
                {
                    "name": "engine",
                    "label": "Rendering engine"
                },
                {
                    "type": "status",
                    "label": "列说明"
                },
                {
                    "type": "operation",
                    "label": "列说明"
                }
            ],
            "filter": {
                "title": "查询条件",
                "controls": [
                    {
                        "type": "text",
                        "name": "keywords",
                        "label": "关键字"
                    }
                ]
            },
            "initFetch": true,
            "loadDataOnce": true,
            "bulkActions": [
                {
                    "label": "按钮",
                    "type": "button"
                }
            ]
        }
    ],
    "messages": {}
};


// const mapStateToProps = state => {}

// const mapDispatchToProps = dispatch => {}

export default connect()(schemaToComponent(schema));