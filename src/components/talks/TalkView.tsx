import React from 'react'
import { ListView, View, TouchableOpacity } from 'react-native'
import Talk from './../../models/fakeTalk'
import TalkCell from './TalkCell'
import Cell from './Cell'

interface Props extends React.Props<View> {
  talks: Talk[]
}


export default class TalkView extends React.Component<Props, {}> {

  dataSource: any

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.talks)
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={(talk: Talk) => this.createTalkList(talk)} />
    )
  }

  createTalkList(talk: Talk) {
    return (
      <TouchableOpacity key={talk.title}>
        <Cell>
          <TalkCell talk={talk} />
        </Cell>
      </TouchableOpacity>
    )
  }
}