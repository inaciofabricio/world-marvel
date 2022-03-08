import moment from "moment";

export default class DateModel {
    constructor(data){
        this.type = data && data.type ? data.type : "";
        this.date = data && data.date ? data.date : "";
    }

    get type() {
        return this._type;
    }
    set type(type){
        this._type = type;
    }

    get date() {
        return this._date;
    }
    set date(date){
        this._date = moment(date).format("DD/MM/YYYY");
    }
}