import React, { memo } from 'react';
import Item from './Item/Item';
import NotFoundItem from './NotFoundItem/NotFoundItem';
import { IItem } from '../../common/interfaces';
import './navList.scss';

interface IProps {
    items:IItem[];
    onSelect:(id:number) => void;  
    notFoundElement:string;
    selectedItemId?: number;
};

const NavList:React.FC<IProps> = ({
    items, 
    onSelect, 
    notFoundElement,
    selectedItemId 
}) => {

    return (
        <div className='nav_list'>
            {(items.length) ? items.map((item:IItem) => <Item key={item.id} {...item} onSelect={onSelect} selectedItemId={selectedItemId}/>) : <NotFoundItem notFoundElement={notFoundElement} /> }
        </div>
    )
}

export default memo(NavList);