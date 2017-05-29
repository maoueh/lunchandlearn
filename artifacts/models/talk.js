import objectMapper from 'object-mapper';
const mapping = {
    id: 'id',
    title: 'title',
    speaker: 'speaker',
    date: 'date',
    description: 'description',
    attendees: 'attendees'
};
export default class Talk {
    static fromJson(json) {
        return new Talk(objectMapper(json, mapping));
    }
    toJson() {
        return objectMapper(this, mapping);
    }
    constructor(params) {
        this.id = params.id;
        this.title = params.title;
        this.speaker = params.speaker;
        this.date = params.date;
        this.description = params.description;
        this.attendees = params.attendees;
    }
}
//# sourceMappingURL=talk.js.map