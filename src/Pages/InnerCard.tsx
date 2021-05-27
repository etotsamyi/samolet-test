//@ts-nocheck
import React, { FC, useState } from 'react';
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
    const card = useStore(dataset).find((element: IDataItem) => element.order === Number(order));
    console.log(card);

    return !!card ? <div className="inner-card">

    </div> : <div className="inner-card">Ошибка</div>
}