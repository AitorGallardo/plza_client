export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    image: string;
    description: string;
    following: number;
    followers: number;
    events: number;
    token?: string;

    static create(json) {
        const user = new User();
        if (json) {
            user.id = json._id ? json._id : null;
            user.username = json.username ? json.username : null;
            user.description = json.description ? json.description : null;
            user.image = json.image ? json.image : null;
            user.following = json.following ? json.following : 0;
            user.followers = json.followers ? json.followers : 0;
            user.events = json.events ? json.events : 0;
            user.token = json.token ? json.token : null;
        }

        return user;
    }
}