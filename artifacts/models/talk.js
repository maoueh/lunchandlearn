import objectMapper from 'object-mapper';
const mapping = {
    id: 'id',
    title: 'title',
    speaker: 'speaker',
    date: 'date',
    attendees: 'attendees'
};
export default class Talk {
    static fromJson(json) {
        return new Talk(objectMapper(json, mapping));
    }
    static init(id, title, speaker, date, attendees) {
        return new Talk([id, title, speaker, date, attendees]);
    }
    toJson() {
        return objectMapper(this, mapping);
    }
    constructor(params) {
        this.id = params.id;
        this.title = params.title;
        this.speaker = params.speaker;
        this.date = params.date;
        this.attendees = params.attendees;
    }
}
//# sourceMappingURL=talk.js.map