import React, { memo } from 'react';
import './styles.scss';

interface IProps {
    id: number;
    title: string;
}

const PhotoCard:React.FC<IProps> = ({ id, title }) => {
    return (
        <div className="photo" id={`photoItem_${id}`}>
            <span>{title}</span>
        </div>
    )
}

export default memo(PhotoCard);