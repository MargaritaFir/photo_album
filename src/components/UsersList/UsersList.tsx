import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { IItem } from '../../common/interfaces';
import List from '../List/List';
import Item from './Item/Item';
import './styles.scss';

interface IProps {
    items:IItem[];
    onSelect:(id:number) => void;  
    selectedItemId?: number;
};

const UsersList:React.FC<IProps> = ({
    items, 
    onSelect, 
    selectedItemId 
}) => {

    const renderItemCallback = useCallback((item ) => <Item key={item.id} {...item} onSelect={onSelect} selectedItemId={selectedItemId}/>, [selectedItemId, onSelect])

    return (
        <div className='nav_list'>
            <List<IItem> items={items} renderItem={renderItemCallback} />
        </div>
    )
}

export default observer(UsersList);