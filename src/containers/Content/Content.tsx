import React, {useContext} from 'react';
import { observer } from 'mobx-react';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import ContentRouter from '../ContentRouter/ContentRouter';
import './content.scss';
import { SideBarContext } from '../../context/Context';

const Content:React.FC = () => {

    const sideBarContext = useContext(SideBarContext);
    console.log('selected user', sideBarContext.selectedUserId)

    return(
        <div className="content">
            {(sideBarContext.selectedUserId !== undefined) ? <ContentRouter /> : <EmptyContainer message={'Select a user from the list'} />}  
        </div>
    )
}

export default observer(Content);