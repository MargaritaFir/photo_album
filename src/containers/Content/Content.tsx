import React from 'react';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import ContentRouter from '../ContentRouter/ContentRouter';
import './content.scss';




const Content:React.FC = () => {

    return(
        <div className="content">
            <ContentRouter />  
           {/* <EmptyContainer message={'Select a user from the list'} />  */}
        </div>
    )
}

export default Content;