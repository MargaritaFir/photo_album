import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import List from '../List/List';
import User from './User/User';
import './styles.scss';

interface IUsers {
    id: number;
    name: string;
    email: string;
}

interface IProps {
    users:IUsers[];
    onSelect:(id:number) => void;  
    selectedUserId?: number;
};

const UsersList:React.FC<IProps> = ({
    users, 
    onSelect, 
    selectedUserId 
}) => {

    const renderUserCallback = useCallback(user  => {  
        return (
            <User 
                key={user.id} 
                id={user.id} 
                email={user.email} 
                name={user.name} 
                onSelect={onSelect} 
                selectedUserId={selectedUserId}
            />
        )}, [selectedUserId, onSelect])

    return (
        <div className='nav_list'>
            <List<IUsers> items={users} renderItem={renderUserCallback} />
        </div>
    )
}

export default observer(UsersList);