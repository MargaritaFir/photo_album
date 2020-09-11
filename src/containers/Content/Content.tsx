import React, {useMemo} from 'react';
import { observer } from 'mobx-react';
import ContentRouter from '../ContentRouter/ContentRouter';
import './styles.scss';
import useQuery from '../../hooks/useQuery';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';

const Content:React.FC = () => {
    let query = useQuery();
    const message = 'Select a user from the list';
    const userId = useMemo( () => query.get('userId'), [query]);
    console.log('userid content', userId)
    return(
        <div className="content">
            { userId ? <ContentRouter /> :
                <EmptyContainer message={message} /> }           
        </div>
    )
}

export default observer(Content);