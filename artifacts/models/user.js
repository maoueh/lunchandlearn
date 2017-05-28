import objectMapper from 'object-mapper';
const mapping = {
    id: 'id',
    name: 'name',
    email: 'email',
    picture: 'picture',
    team: 'team',
    position: 'position',
    biography: 'biography',
    talksAttended: 'talksAttended'
};
export default class User {
    constructor(params) {
        this.params = params;
        this.id = params.id;
        this.name = params.name;
        this.email = params.email;
        this.picture = params.picture;
        this.position = params.position;
        this.team = params.team;
        this.biography = params.biography;
        this.talksAttended = params.talksAttended;
    }
    static fromJson(json) {
        return new User(objectMapper(json, mapping));
    }
    toJson() {
        return objectMapper(this, mapping);
    }
}
//# sourceMappingURL=user.js.map