import React from 'react';
import { observer } from 'mobx-react';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import './styles.scss';

interface IProps {
    id: string;
}

const ReturnBackButton:React.FC<IProps> = ({ id }) => {
    return (
    <div className="button_container">  
        <Link to={`/albums?userId=${id}`}>
            <Button  text={'Go back to user\'s albums'}/>
        </Link> 
    </div>
    )
}

export default observer(ReturnBackButton);