export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar: string;
    description: string;
    following: Array<String>;
    followers: Array<String>;
    events: Array<String>;
    images: Array<String>;
    nFollowing: number;
    nFollowers: number;
    nEvents: number;
    token?: string;

    static create(json) {
        const user = new User();
        if (json) {
            user.id = json._id ? json._id : null;
            user.username = json.username ? json.username : null;
            user.description = json.description ? json.description : null;
            user.avatar = json.avatar ? json.avatar : null;
            user.following = json.following ? json.following : [];
            user.followers = json.followers ? json.followers : [];
            user.events = json.events ? json.events : [];
            user.images = json.images ? json.images : [];
            user.nFollowing = json.nFollowing ? json.nFollowing : 0;
            user.nFollowers = json.nFollowers ? json.nFollowers : 0;
            user.nEvents = json.nEvents ? json.nEvents : 0;
            user.token = json.token ? json.token : null;
        }

        return user;
    }
}