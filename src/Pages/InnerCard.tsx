import React, { FC, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { dataset } from '../store/store';
import { IDataItem } from '../types/IDataItem';
import "./InnerCard.scss";
import { useHistory } from 'react-router-dom';
import { PageHeader } from 'antd';

interface IProps {
    match: any
}

export const InnerCard: FC<IProps> = ({ match }) => {
    const order = match.params.order;
    const data: IDataItem[] = useStore(dataset)
    const index: number = data.findIndex((element: IDataItem) => element.order === Number(order));
    const card = data[index]
    let history = useHistory();

    return !!card ? <div className="inner-card">
        <main className="card">
            <PageHeader style={{ fontSize: "16px" }} className="card-title" onBack={() => history.push("./")} title={card.fullname} />
            <ul className="card-list">
                <li className="card-field">
                    <div className="field field-name">Область: </div>
                    <div className="field field-value">{card.territory}</div>
                </li>
                <li className="card-field">
                    <div className="field field-name">Адрес: </div>
                    <div className="field field-value">{card.address}</div>
                </li>
                <li className="card-field">
                    <div className="field field-name">Библиотек: </div>
                    <div className="field field-value">{card.libraries}</div>
                </li>
                <li className="card-field">
                    <div className="field field-name">Посетителей: </div>
                    <div className="field field-value">{card.users}</div>
                </li>
                <li className="card-field">
                    <div className="field field-name">Посещений: </div>
                    <div className="field field-value">{card.visits}</div>
                </li>
                <li className="card-field">
                    <div className="field field-name">Персонал с ВО: </div>
                    <div className="field field-value">{card.staff_higheeducated}</div>
                </li>
            </ul>

            {/* <span>{cardData.territory}</span>
        <span>{cardData.territory}</span>
        <span>{cardData.territory}</span>
        <span>{cardData.territory}</span>
        <span>{cardData.territory}</span> */}
        </main>
    </div> : <div className="inner-card">Ошибка</div>
}