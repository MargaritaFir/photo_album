import { observable, computed, action } from 'mobx';
import {actionAsync, task} from "mobx-utils"
import { IUserInfo } from '../common/interfaces';
import UsersApi from '../common/UsersApi';
import { filterByName } from '../common/utils/filters';

export class SideBarStore {

    public usersApi:any;

    constructor(url:string){
        this.usersApi = new UsersApi(url);
    }

    @observable private _users: IUserInfo[] = [];
    @observable filterValue: string = '';
    @observable selectedUserId?: number; 
    @observable isLoading: boolean = false;

    @computed get users(): IUserInfo[] {
        return (this.filterValue) ? filterByName(this._users, this.filterValue):this._users;
    };

    @computed get isEmpty ()  {
        return (this.users.length) ? false : true;
    };

    @actionAsync 
    loadUsers = async() => {
        this.isLoading = true;
        try {
            const users = await task(this.usersApi.getUsers());
            this._users = users;         
        } catch (error) {
            this.isLoading = false;
            console.log('Error: ', error);
        }
        this.isLoading = false;

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


