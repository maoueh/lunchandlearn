import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import Cell from './Cell'
import * as actions from '../../actions'

import SpeakerView from './SpeakerView'
import TalkDetail from './TalkDetail'
import ExpandedTalkDetail from './ExpandedTalkDetail'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'

import Talk from '../../models/talk'

interface Props extends React.Props<View> {
  talk: Talk,
  isExpanded: boolean
  selectTalk: (id: string) => {}
}

const styles = StyleSheet.create({
  reduced: {
    alignItems: 'center',
    padding: Padding.MEDIUM,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: Colors.LIGHT_GREY,
    position: 'relative'
  },
  expanded: {
    alignItems: 'center',
    padding: Padding.MEDIUM,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-around',
    flexDirection: 'column',
    borderColor: Colors.LIGHT_GREY,
    position: 'relative'
  }
})

class TalkCell extends React.Component<Props, {}> {
  render() {
    const { talk } = this.props
    return (
      <TouchableWithoutFeedback
        key={talk.title}
        onPress={() => this.props.selectTalk(talk.id)}>
        <Cell>
          {this.renderTalk()}
        </Cell>
      </TouchableWithoutFeedback>
    )
  }

  renderTalk(): JSX.Element {
    const { talk, isExpanded } = this.props
    if (isExpanded) {
      return (
        <View style={styles.expanded}>
          <ExpandedTalkDetail talk ={talk}/>
          <SpeakerView
            speaker={talk.speaker}
            hideDetail={false}/>
        </View>
      )
    } else {
      return (
        <View style={styles.reduced}>
            <SpeakerView
              speaker={talk.speaker}
              hideDetail={true}/>
            <TalkDetail talk ={talk}/>
          </View>
      )
    }
  }

}

const mapStateToProps = (state, ownProps: Props) => {
  const isExpanded = state.selectedTalkId === ownProps.talk.id
  return { isExpanded }
}

export default connect(mapStateToProps, actions)(TalkCell)
