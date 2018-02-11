export class EventModel {
    id: number;
    name: string;
    date: string;
    pictureURL: string;
    description: string;

    //? 2 féle mód
    //new EventModel({...})
    //new EventModel()
    constructor(param?: EventModel) {
        if (param)
            Object.assign(this, param);
    }
}


