export class Event {

    id: string;
    name: string;
    description: string;
    comments: string;
    image: string;
    rating: number;
    latitude: number;
    longitude: number;
    date: Date;
    time: Date;
    owner: string;
    maxMembers: number;
    members: Array<string>;


    constructor() {

     }

     static create(json): Event{
        const event = new Event();
        if(json){
           event.id = json.id ? json.id : null;
           event.name = json.name ? json.name : null;
           event.description = json.description ? json.description : null;
           event.comments = json.comments ? json.comments : null;
           event.image = json.image ? json.image : null;
           event.rating = json.rating ? json.rating : 0;
           event.latitude = json.latitude ? json.latitude : -1;
           event.longitude = json.longitude ? json.longitude : -1;
           event.date = json.date ? json.date : null;
           event.time = json.time ? json.time : null;
           event.owner = json.owner ? json.owner : null;
           event.maxMembers = json.maxMembers ? json.maxMembers : 1;
           event.members = json.members ? json.members : null;
        }

        return event;
     }

}