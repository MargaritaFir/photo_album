import React, {useMemo} from 'react';
import useQuery from '../../hooks/useQuery';
import { observer } from 'mobx-react';
import ContentRouter from '../ContentRouter/ContentRouter';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import './styles.scss';

const message = 'Select a user from the list';

const Content:React.FC = () => {

    const query = useQuery();
    const userId = useMemo( () => query.get('userId'), [query]);

    return(
        <div className="content">
            { 
                userId ?
                    <ContentRouter /> :
                        <EmptyContainer message={message} /> 
            }           
        </div>
    )
}

export default observer(Content);