import objectMapper from 'object-mapper'
import Talk from './talk'

const mapping = {
  id: 'id',
  name: 'name',
  email: 'email',
  picture: 'picture',
  team: 'team',
  position: 'position',
  biography: 'biography',
  talksAttended: 'talksAttended'
}

export default class User {
  id: string
  name: string
  email: string
  picture: string
  team: string
  position: string
  biography: string
  talksAttended: Talk[]

  static fromJson(json) {
    return new User(objectMapper(json, mapping))
  }

  toJson() {
    return objectMapper(this, mapping)
  }

  constructor(public params) {
    this.id = params.id
    this.name = params.name
    this.email = params.email
    this.picture = params.picture
    this.position = params.position
    this.team = params.team
    this.biography = params.biography
    this.talksAttended = params.talksAttended
  }

}