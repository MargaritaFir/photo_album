import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { SideBarContext } from '../../context/Context';
import ContentRouter from '../ContentRouter/ContentRouter';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import './styles.scss';

const message = 'Select a user from the list';

const Content:React.FC = () => {

    const { selectedUserId } = useContext(SideBarContext);

    return (
        <div className="content">
            { 
                selectedUserId ?
                    <ContentRouter /> :
                        <EmptyContainer message={message} /> 
            }           
        </div>
    )
}

export default observer(Content);