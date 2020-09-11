import React, { useCallback, memo } from 'react';
import  { Link } from "react-router-dom";
import './styles.scss';

interface IProps {
    id: number,
    name: string,
    onSelect:(id:number) => void;
    selectedUserId?: number;
    email: string
};

const User:React.FC<IProps> = ({ 
    id, 
    name, 
    onSelect,
    selectedUserId, 
    email
}) => {

    const classList = (selectedUserId !== id) ? "user" : "user selected";
    const onClickCallback = useCallback(() => onSelect(id), [id, onSelect]);

    return (
        <Link to={`/albums?userId=${id}`}>
            <div className={classList} id={`user_${id}`} onClick={onClickCallback}>
                <span className='user_name'>{name}</span>
                <span className='user_email'>{email}</span>
            </div>
        </Link>
    )
};

export default memo(User);