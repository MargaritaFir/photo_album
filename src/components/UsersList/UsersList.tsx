import React, { memo } from 'react';
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

    return (
        <div className='nav_list'>
            <List items={items} renderItem={(item:any) => <Item key={item.id} {...item} onSelect={onSelect} selectedItemId={selectedItemId}/>} />
        </div>
    )
}

export default memo(UsersList);