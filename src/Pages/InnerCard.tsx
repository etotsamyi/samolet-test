import React, { FC, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { dataset } from '../store/store';
import { IDataItem } from '../types/IDataItem';
import "./Main.scss";
import { useHistory } from 'react-router-dom';

interface IProps {
    match: any
}

export const InnerCard: FC<IProps> = ({ match }) => {
    const order = match.params.order;
    const data: IDataItem[] = useStore(dataset)
    const index: number = data.findIndex((element: IDataItem) => element.order === Number(order));
    const card = data[index]

    return !!card ? <div className="inner-card">
        <span>{card.territory}</span>
        <span>{card.users}</span>
        <span>{card.site}</span>
        <span>{card.address}</span>
        {/* <span>{cardData.territory}</span>
        <span>{cardData.territory}</span>
        <span>{cardData.territory}</span>
        <span>{cardData.territory}</span>
        <span>{cardData.territory}</span> */}
    </div> : <div className="inner-card">Ошибка</div>
}