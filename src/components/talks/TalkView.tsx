import React from 'react'
import { ListView, SectionList, View, TouchableOpacity } from 'react-native'
import _ from 'lodash'
import Talk from './../../models/talk'
import TalkCell from './TalkCell'
import Cell from './Cell'
import DateListHeader from './DateListHeader'

interface Props extends React.Props<View> {
  talks: Talk[]
}

export default class TalkView extends React.Component<Props, {}> {

  dataSource = []

  splitTalksByDate(talks: Talk[]) {
    return grouped = _.transform(talks, function(result, talk) {
      (result[talk.date] || (result[talk.date] = [])).push(talk)
    }, {})
  }

  componentWillMount() {
    this.dataSource = this.splitTalksByDate(this.props.talks)
  }

  render() {
    return (
      <SectionList
        renderItem={this.createTalkItem}
        renderSectionHeader={this.renderHeader}
        sections ={this.dataSource}
        keyExtractor ={ (talk: Talk) => talk.id }
        />
      {/*<ListView
        dataSource={this.dataSource}
        renderRow={(talk: Talk) => this.createTalkList(talk)} />*/}
    )
  }

  createTalkItem(talk: Talk) {
    return (
      <TouchableOpacity key={talk.title}>
        <Cell>
          <TalkCell talk={talk} />
        </Cell>
      </TouchableOpacity>
    )
  }

  createHeader(date: string) {
    return (
      <DateListHeader date={date} />
    )
  }
}