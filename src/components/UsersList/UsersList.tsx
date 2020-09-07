import React, { memo, useCallback } from 'react';
import Item from './Item/Item';
import { IItem } from '../../common/interfaces';
import './usersList.scss';
import List from '../List/List'

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

    const handleRenderItem = useCallback((item ) => <Item key={item.id} {...item} onSelect={onSelect} selectedItemId={selectedItemId}/>, [selectedItemId, onSelect])

    return (
        <div className='nav_list'>
            <List<IItem> items={items} renderItem={handleRenderItem} />
        </div>
    )
}

export default memo(UsersList);