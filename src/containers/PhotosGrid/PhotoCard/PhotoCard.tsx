import React from 'react';
import './styles.scss';
import { observer } from 'mobx-react';

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

export default observer(PhotoCard);