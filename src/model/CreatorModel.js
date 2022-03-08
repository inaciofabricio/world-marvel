import ComicModel from "./ComicModel";
import EventModel from "./EventModel";
import SerieModel from "./SerieModel";
import StorieModel from "./StorieModel";

export default class CreatorModel {
    constructor(data){
        this.id = data && data.resourceURI ? data.resourceURI : "";
        this.name = data;
        this.thumbnail = data && data.thumbnail ? data.thumbnail : "";
        this.comics = data && data.comics && data.comics.items ? data.comics.items : [];
        this.events = data && data.events && data.events.items ? data.events.items : [];
        this.series = data && data.series && data.series.items ? data.series.items : [];
        this.stories = data && data.stories && data.stories.items ? data.stories.items : [];
    }

    get id() {
        return this._id;
    }
    set id(resourceURI){
        let array = resourceURI ? resourceURI.split("/") : "0";
        this._id = parseInt(array[array.length - 1]);
    }

    get name() {
        return this._name;
    }
    set name(data){
        if(data && data.fullName) {
            this._name = data.fullName;
        } else if(data && data.name) {
            this._name = data.name;
        } else {
            this._name = "...";
        }
    }

    get thumbnail() {
        return this._thumbnail;
    }
    set thumbnail(data){
        let array = data && data.path ? data.path.split("/") : "";

        if(array === "" || array[array.length - 1] === "image_not_available"){
            this._thumbnail = "";
        } else {
            this._thumbnail = `${data.path}.${data.extension}`;
        }
    }

    get events() {
        return this._events;
    }
    set events(data){

        let array = []

        data.forEach((e) => {
            array.push(new EventModel(e))
        });

        this._events = array;
    }

    get comics() {
        return this._comics;
    }
    set comics(data){

        let array = []

        data.forEach((e) => {
            
            array.push(new ComicModel(e))
        });

        this._comics = array;
    }

    get series() {
        return this._series;
    }
    set series(data){

        let array = []

        data.forEach((e) => {
            array.push(new SerieModel(e))
        });

        this._series = array;
    }

    get stories() {
        return this._stories;
    }
    set stories(data){

        let array = []

        data.forEach((e) => {
            array.push(new StorieModel(e))
        });

        this._stories = array;
    }
}