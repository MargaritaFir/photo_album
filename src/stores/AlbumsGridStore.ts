import { observable, computed } from 'mobx';
import { actionAsync, task } from "mobx-utils"
import { IAlbum } from '../common/interfaces';
import UsersApi from '../common/UsersApi';


class AlbumsGridStore {

    public usersApi:any;

    constructor(url:string){
        this.usersApi = new UsersApi(url);
    }

    @observable albums: IAlbum[] = []
    @observable isLoading: boolean = false;

    @computed get isEmpty() {
        return (this.albums.length) ? false : true;
    }

    @actionAsync 
    loadAlbums = async(userId:number|string) => {
        this.isLoading = true;
        try {
            const albums = await task(this.usersApi.getAlbums(userId));
            this.albums = albums;         
        } catch (error) {
            this.isLoading = false;
            console.log('Error: ', error);
        }
        this.isLoading = false;
    }
}

export default AlbumsGridStore;