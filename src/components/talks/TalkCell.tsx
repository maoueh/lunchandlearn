import React from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import { selectTalk } from '../../reducers/talk_selection'
import { SpeakerView, TalkDetail, ExpandedTalkDetail } from './'
import { Cell } from '../reusable'
import * as Colors from '../../constants/style/colors'
import * as Padding from '../../constants/style/padding'
import * as Animations from '../../constants/style/animations'

import Talk from '../../models/talk'

interface Props extends React.Props<View> {
  actions: { selectTalk: any },
  talk: Talk,
  isExpanded: boolean
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: Padding.MEDIUM,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: Colors.LIGHT_GREY,
    position: 'relative'
  }
})

class TalkCell extends React.Component<Props, {}> {
  componentWillUpdate() {
    LayoutAnimation.configureNext(Animations.CustomLayoutSpring)
  }

  render() {
    const { talk } = this.props
    return (
      <TouchableWithoutFeedback
        key={talk.id}
        onPress={() => this.props.actions.selectTalk(this.props.talk.id)}>
        <View>
          <Cell>
            {this.renderTalk()}
          </Cell>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  renderTalk() {
    const { talk, isExpanded } = this.props
    if (isExpanded) {
      return (
        <View style={
          _.assign({}, styles.container,  { flexDirection: 'column' })
          }>
          <ExpandedTalkDetail talk ={talk}/>
          <SpeakerView
            speaker={talk.speaker}
            hideDetail={false}/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
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
  const isExpanded = state.selectedTalk.id === ownProps.talk.id
  return { isExpanded }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ selectTalk }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TalkCell)
