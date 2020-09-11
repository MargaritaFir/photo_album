import { observable, computed, action } from 'mobx';
import { actionAsync, task } from "mobx-utils"
import { IUserInfo } from '../common/interfaces';
import Api from '../common/Api';
import { filterByName } from '../common/utils/filters';

export class SideBarStore {

    private api:Api;

    constructor(api:Api){
        this.api = api;
    }

    @observable private _users: IUserInfo[] = [];
    @observable filterValue = '';
    @observable selectedUserId?: number; 
    @observable isLoading = false;

    @computed get users() {
        return (this.filterValue) ? filterByName(this._users, this.filterValue):this._users;
    };

    @computed get isEmpty ()  {
        return !this.users.length
    };


    @actionAsync 
    loadUsers = async() => {

        try {
            this.isLoading = true;
            const users = await task(this.api.getUsers());
            this._users = users;         
        } catch (error) {      
            console.log('Error: ', error);
        } finally {
            this.isLoading = false;
        }
        
    };

    @action setFilterValue = (value:string) => {    
        this.filterValue = value;       
    };

    @action selectUser = (userId: number) => {
            const user = this._users.find(user => user.id === userId);
            if(user) {
                this.selectedUserId = user.id;
            } else {
                this.selectedUserId = undefined;
            }

    };

	@action setClearValue = () => {
        this.filterValue = ''; 
    };
}


