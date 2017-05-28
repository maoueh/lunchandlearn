import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as TalkAPI from './../api/talk'
import Talk from './../models/fakeTalk'
import TalkView from './../components/talks/TalkView'
import { NavigationBar, EmptyView, Loader } from '../components/reusable'

interface Props extends React.Props<View> {

}

interface State {
  isLoading: boolean,
  isEmpty: boolean,
  talks: Array<Talk>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})

export class TalksCalendarPresenter extends React.Component<Props, State> {

  title = 'Lunch and Learn'

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isEmpty: false,
      talks: new Array<Talk>()
    }
  }

  componentWillMount() {
    TalkAPI.fetchTalks()
    .then(response => this.setState({
      isEmpty: response.length !== 0,
      isLoading: false,
      talks: response
     }))
  }

  renderContent() {
    if (this.state.isLoading) return undefined
    return this.state.talks.length === 0 ?
    <EmptyView text='Sorry, there are no upcoming talks'/>
    :
    <TalkView talks = {this.state.talks} />
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar name={this.title}/>
        <Loader display={this.state.isLoading} />
        {this.renderContent()}
      </View>
    )
  }
}
