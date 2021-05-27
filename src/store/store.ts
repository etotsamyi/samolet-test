import { createEvent, createStore, Store } from 'effector'
import { IDataItem } from '../types/IDataItem';

export const initializeElements = createEvent("init");
export const sortByLibs = createEvent("sort");
export const filterByName = createEvent("filter")

export const dataset = createStore([])
    //@ts-ignore
    .on(initializeElements, (state: IDataItem[], payload: IDataItem[]) => [...payload]);