import ComicModel from "./ComicModel";
import EventModel from "./EventModel";
import SerieModel from "./SerieModel";
import StorieModel from "./StorieModel";

export default class CharacterModel {
    constructor(data){
        this.id = data;
        this.name = data && data.name ? data.name : "...";
        this.description = data && data.description ? data.description : "...";
        this.thumbnail = data && data.thumbnail ? data.thumbnail : "";
        this.comics = data && data.comics && data.comics.items ? data.comics.items : [];
        this.events = data && data.events && data.events.items ? data.events.items : [];
        this.series = data && data.series && data.series.items ? data.series.items : [];
        this.stories = data && data.stories && data.stories.items ? data.stories.items : [];
    }

    get id() {
        return this._id;
    }
    set id(data){

        if(data && data.id) {
            this._id = parseInt(data.id);
        } else if(data && data.resourceURI) {
            let array = data.resourceURI.split("/");
            this._id = parseInt(array[array.length - 1]);
        } else {
            this._id = 0;
        }
    }

    get name() {
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get description() {
        return this._description;
    }
    set description(description){
        this._description = description;
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