import { useStore } from 'effector-react';
import React, { useState } from 'react';
import { dataset } from '../store/store';
import { IDataItem } from '../types/IDataItem';
import { Card, Button, Input, Switch } from 'antd';
import "./Main.scss";
import { useHistory } from 'react-router-dom';

export const Main = () => {
    const data: IDataItem[] = useStore(dataset)
    let history = useHistory();
    const [sorted, changeSortState] = useState(false);
console.log(sorted);

    return <>
        <div className="settings">
            <Input placeholder="Регион" type="text" />
            <div>
                <label>Сортировка</label>
                <Switch onChange={e => changeSortState(e)} />
            </div>
        </div>
        <main className="content-container">
            {data.map((region: IDataItem) => {
                return <Card
                    className="single-card"
                    hoverable
                    key={region.order}
                    title={region.territory}
                    size="small"
                    extra={<Button onClick={() => history.push(`./${region.order}`)} type="primary">Подробнее</Button>}
                    style={{ width: "32%", margin: "0 0 16px 1%" }}
                    onDoubleClick={() => history.push(`./${region.order}`)}
                >
                    <div className="libs-count">библиотек: {region.libraries}</div>
                </Card>
                // <div key={region.order}>{region.territory}</div>
            })}
        </main>
    </>
}