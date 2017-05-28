import objectMapper from 'object-mapper'
import Speaker from './speaker'
import User from './user'

const mapping = {
  id: 'id',
  title: 'title',
  speaker: 'speaker',
  date: 'date',
  attendees: 'attendees'
}
export default class Talk {

  id: string
  title: string
  speaker: Speaker
  date: string
  attendees: User[]

  static fromJson(json) {
    return new Talk(objectMapper(json, mapping))
  }

  static init(
    id: string,
    title: string,
    speaker: Speaker,
    date: string,
    attendees: User[]) {
    return new Talk([id, title, speaker, date, attendees])
  }

  toJson() {
    return objectMapper(this, mapping)
  }

  private constructor(params) {
    this.id = params.id
    this.title = params.title
    this.speaker = params.speaker
    this.date = params.date
    this.attendees = params.attendees
  }

}