import objectMapper from 'object-mapper';
const appToServerMapping = {
    title: 'title',
    speaker: 'speaker',
    speakerPhoto: 'speakerPhoto',
    slidesURL: 'url'
};
const serverToAppMapping = {
    title: 'title',
    artist: 'speaker',
    thumbnail_image: 'speakerPhoto',
    url: 'slidesURL'
};
export default class FakeTalk {
    static fromJson(json) {
        return new FakeTalk(objectMapper(json, serverToAppMapping));
    }
    toJson() {
        return objectMapper(this, appToServerMapping);
    }
    constructor(params) {
        this.title = params.title;
        this.speaker = params.speaker;
        this.date = '12:30pm';
        this.speakerPhoto = params.speakerPhoto;
        this.slidesURL = params.slidesURL;
    }
}
//# sourceMappingURL=fakeTalk.js.map