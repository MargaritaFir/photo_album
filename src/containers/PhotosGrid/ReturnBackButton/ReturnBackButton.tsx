import React, { memo } from 'react';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import './styles.scss';

interface IProps {
    id: string;
}

const ReturnBackButton:React.FC<IProps> = ({ id }) => {
    return (
        <Link className="button_container" to={`/albums?userId=${id}`}>
            <Button  text={'Go back to user\'s albums'}/>
        </Link> 
    )
}

export default memo(ReturnBackButton);