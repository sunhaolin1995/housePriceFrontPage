import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3000/api/housePrices', // 这里改为你的后端接口地址
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>爬取的房价数据</h1>
            <table>
                <thead>
                <tr>
                    <th>价格（万）</th>
                    <th>单价（元/平米）</th>
                    <th>楼层</th>
                    <th>户型</th>
                    <th>面积（平米）</th>
                    <th>关注人数/发布天数</th>
                    <th>跳转链接</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.price}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.floor}</td>
                        <td>{item.houseType}</td>
                        <td>{item.area}</td>
                        <td>{item.focus}</td>
                        <td>
                            <a href={item.link} target="_blank" rel="noreferrer">
                                {item.link}
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
