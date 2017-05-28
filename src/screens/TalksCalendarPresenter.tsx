import React from 'react'
import { View, StyleSheet } from 'react-native'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import * as TalkAPI from './../api/talk'
import Talk from './../models/talk'
import TalkView from './../components/talks/TalkView'
import { NavigationBar, EmptyView, Loader } from '../components/reusable'

interface Props extends React.Props<View> {

}

interface State {
  isLoading: boolean,
  isEmpty: boolean,
  talks: Talk[]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})

export default class TalksCalendarPresenter extends React.Component<Props, State> {

  title = 'Lunch and Learn'

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isEmpty: false,
      talks: []
    }
  }

  componentWillMount() {
    TalkAPI.fetchTalks()
    .then(response =>
    // console.log(response)
    this.setState({
      isLoading: false,
      isEmpty: response.length !== 0,
      talks: response
     })
    )
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

// const mapStateToProps = (state) => ({
//   isLoading: state.talks.isLoading,
//   isEmpty: state.talks.data.length !== 0,
//   talks: state.talks.data
// })

// export default connect(mapStateToProps)(TalkView)