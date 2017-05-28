import objectMapper from 'object-mapper';
import User from './user';
const mapping = {
    id: 'id',
    name: 'name',
    email: 'email',
    picture: 'picture',
    team: 'team',
    position: 'position',
    biography: 'biography',
    talks: 'talks',
    talksAttended: 'talksAttended'
};
export default class Speaker extends User {
    static fromJson(json) {
        return new Speaker(objectMapper(json, mapping));
    }
    toJson() {
        return objectMapper(this, mapping);
    }
    constructor(params) {
        super(params);
        this.talks = params.talks;
    }
}
//# sourceMappingURL=speaker.js.map