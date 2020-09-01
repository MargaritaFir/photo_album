import React, {useCallback, memo} from 'react';
import './item.scss';

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

    const handleClick = useCallback(() => onSelect(id), [id, onSelect]);
    const classList = (selectedItemId !== id) ? "item" : "item selected";

    return (
        <div className={classList} id={`item_${id}`} onClick={handleClick}>
            <span>{name}</span>
        </div>
    )
};

export default memo(Item);