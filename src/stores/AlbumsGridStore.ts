import { observable, computed } from 'mobx';
import { actionAsync, task } from "mobx-utils"
import { IAlbum } from '../common/interfaces';
import Api from '../common/Api';


class AlbumsGridStore {

    private api:Api;

    constructor(api:Api){
        this.api = api;
    }

    @observable albums: IAlbum[] = []
    @observable isLoading = false;

    @computed get isEmpty() {
        return !this.albums.length;
    }

    @actionAsync 
    loadAlbums = async(userId:number|string) => {
        
        try {
            this.isLoading = true;
            const albums = await task(this.api.getAlbums(userId));
            this.albums = albums;         
        } catch (error) {
            console.log('Error: ', error);
        }  finally {
            this.isLoading = false;
        }
    }
}

export default AlbumsGridStore;