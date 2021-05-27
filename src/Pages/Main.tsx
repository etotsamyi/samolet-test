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
    const [sorted, changeSortState] = useState<boolean>(false);
    const [filterText, changeFilterText] = useState<string>("")

    const sortByLibs = (data: IDataItem[], needToBeSorted: boolean) => {
        if (!needToBeSorted) return data;
        const newData = data.slice().sort((a: IDataItem, b: IDataItem) => b.libraries - a.libraries);
        return newData;
    }

    return <>
        <div className="settings">
            <Input onChange={(e) => changeFilterText(e.target.value)} placeholder="Регион" type="text" />
            <div>
                <label>Сортировка</label>
                <Switch onChange={e => changeSortState(e)} />
            </div>
        </div>
        <main className="content-container">
            {sortByLibs(data, sorted).filter((region: IDataItem) => {
                return !filterText ? true : region.territory.replace(".", " ").match(filterText)
            }).map((region: IDataItem) => {
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
            })}
        </main>
    </>
}
