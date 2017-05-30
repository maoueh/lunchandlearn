import objectMapper from 'object-mapper'
import Speaker from './speaker'
import User from './user'

const mapping = {
  id: 'id',
  title: 'title',
  speaker: 'speaker',
  date: 'date',
  description: 'description',
  attendees: 'attendees'
}
export default class Talk {

  id: string
  title: string
  speaker: Speaker
  date: string
  description: string
  attendees: User[]

  static fromJson(json) {
    return new Talk(objectMapper(json, mapping))
  }

  toJson() {
    return objectMapper(this, mapping)
  }

  private constructor(params) {
    this.id = params.id
    this.title = params.title
    this.speaker = params.speaker
    this.date = params.date
    this.description = params.description
    this.attendees = params.attendees
  }

}