import CharacterModel from "./CharacterModel";
import CreatorModel from "./CreatorModel";
import DateModel from "./DateModel";
import EventModel from "./EventModel";
import SerieModel from "./SerieModel";
import StorieModel from "./StorieModel";

export default class ComicModel {
    constructor(data){
        this.id = data && data.resourceURI ? data.resourceURI : "";
        this.name = data && data.name ? data.name : "...";
        this.title = data && data.title ? data.title : "...";
        this.thumbnail = data && data.thumbnail ? data.thumbnail : "";
        this.characters = data && data.characters && data.characters.items ? data.characters.items : [];
        this.creators = data && data.creators && data.creators.items ? data.creators.items : [];
        this.events = data && data.events && data.events.items ? data.events.items : [];
        this.series = data && data.series ? data.series : [];
        this.stories = data && data.stories && data.stories.items ? data.stories.items : [];
        this.prices = data && data.prices ? data.prices : [];
        this.dates = data && data.dates ? data.dates : [];
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
    set name(name){
        this._name = name;
    }

    get title() {
        return this._title;
    }
    set title(title){
        this._title = title;
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

    get characters() {
        return this._characters;
    }
    set characters(data){

        let array = []

        data.forEach((e) => {
            array.push(new CharacterModel(e))
        });

        this._characters = array;
    }

    get creators() {
        return this._creators;
    }
    set creators(data){

        let array = []

        data.forEach((e) => {
            array.push(new CreatorModel(e))
        });

        this._creators = array;
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

        array.push(new SerieModel(data));

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

    get prices() {
        return this._prices;
    }
    set prices(prices){
        this._prices = prices;
    }

    get dates() {
        return this._dates;
    }
    set dates(data){

        let array = []

        data.forEach((e) => {
            array.push(new DateModel(e))
        });

        this._dates = array;
    }
}