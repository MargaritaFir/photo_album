//Получение списка пользователя

class UsersApi {
    private url:string;
    constructor(url: string){
        this.url = url
    }

    getUsers() {
        return fetch(`${this.url}/users`)
        .then((response) => response.json())
        .then(data => {
            return data;           
        });
    };

    getAlbums(userId:number|string){
        return fetch(`${this.url}/albums?userId=${userId}`)
        .then((response) => response.json())
        .then(data => {
            return data;           
        });
    };

    getPhotos(albumId:number|string){
        return fetch(`${this.url}/photos?albumId=${albumId}`)
        .then((response) => response.json())
        .then(data => {
            return data;           
        });
    }

}

export default UsersApi;