import React from 'react'
import { ListView, View } from 'react-native'
import { connect } from 'react-redux'
import Talk from './../../models/talk'
import TalkCell from './TalkCell'

interface Props extends React.Props<View> {
  talks: Talk[]
}

class TalkView extends React.Component<Props, {}> {

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
    return <TalkCell talk={talk}/>
  }
}

export default connect()(TalkView)
