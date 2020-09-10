import React, { useCallback } from 'react';
import  { Link } from "react-router-dom";
import { observer } from 'mobx-react';
import './styles.scss';

interface IProps {
    id: number,
    name: string,
    onSelect:(id:number) => void;
    selectedItemId?: number;
};

const Item:React.FC<IProps> = ({ 
    id, 
    name, 
    onSelect,
    selectedItemId
}) => {

    const classList = (selectedItemId !== id) ? "item" : "item selected";
    const onClickCallback = useCallback(() => onSelect(id), [id, onSelect]);

    return (
        <Link to={`/albums?userId=${id}`}>
            <div className={classList} id={`item_${id}`} onClick={onClickCallback}>
                <span>{name}</span>
            </div>
        </Link>
    )
};

export default observer(Item);