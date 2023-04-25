import React from "react";
import { Table } from "antd";
import moment from "moment";
import "antd/dist/antd.css";

const columns = [
    {
        title: "价格（万）",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "单价（元/平米）",
        dataIndex: "unitPrice",
        key: "unitPrice",
    },
    {
        title: "楼层",
        dataIndex: "floor",
        key: "floor",
    },
    {
        title: "户型",
        dataIndex: "layout",
        key: "layout",
    },
    {
        title: "面积（平米）",
        dataIndex: "area",
        key: "area",
    },
    {
        title: "发布时间",
        dataIndex: "publishTime",
        key: "publishTime",
        render: (text) => moment(text).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
        title: "关注人数/发布天数",
        dataIndex: "attention",
        key: "attention",
    },
    {
        title: "操作",
        key: "action",
        render: (text, record) => (
            <a href={record.link} target="_blank" rel="noopener noreferrer">
                查看详情
            </a>
        ),
    },
];

const HouseList = ({ data }) => {
    return <Table columns={columns} dataSource={data} />;
};

export default HouseList;
