import objectMapper from 'object-mapper'
import User from './user'
import Talk from './talk'

const mapping = {
  id: 'id',
  name: 'name',
  nickname: 'nickname',
  email: 'email',
  picture: 'picture',
  team: 'team',
  position: 'position',
  biography: 'biography',
  talks: 'talks',
  talksAttended: 'talksAttended'
}

export default class Speaker extends User {

  talks: Talk[]

  static fromJson(json) {
    return new Speaker(objectMapper(json, mapping))
  }

  toJson() {
    return objectMapper(this, mapping)
  }

  constructor(params) {
    super(params)
    this.talks = params.talks
  }

}