import { observable, computed } from 'mobx';
import { actionAsync, task } from "mobx-utils"
import { IPhoto } from '../common/interfaces';
import UsersApi from '../common/UsersApi';

class PhotosGridStore {

    public usersApi:any;

    constructor(url:string){
        this.usersApi = new UsersApi(url);
    }

    @observable photos: IPhoto[] = []
    @observable isLoading: boolean = false;

    @computed get isEmpty() {
        return (this.photos.length) ? false : true;
    }

    @actionAsync 
    loadPhotos = async(albumId:number|string) => {
        this.isLoading = true;
        try {
            const photos = await task(this.usersApi.getPhotos(albumId));
            this.photos = photos;         
        } catch (error) {
            this.isLoading = false;
            console.log('Error: ', error);
        }
        this.isLoading = false;
    }
}

export default PhotosGridStore;