import React from 'react';
import { observer } from 'mobx-react';
import ContentRouter from '../ContentRouter/ContentRouter';
import './styles.scss';

const Content:React.FC = () => {

    return(
        <div className="content">
            <ContentRouter />  
        </div>
    )
}

export default observer(Content);