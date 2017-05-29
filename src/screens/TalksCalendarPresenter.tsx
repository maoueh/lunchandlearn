import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { fetchTalks } from '../actions'
import Talk from '../models/talk'
import TalkView from '../components/talks/TalkView'
import { NavigationBar, EmptyView, Loader } from '../components/reusable'

interface Actions {
  fetchTalks: PropTypes.func
}

interface Props extends React.Props<View> {
  actions: Actions,
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

class TalksCalendarPresenter extends React.Component<Props, {}> {

  title = 'Lunch and Learn'

  componentWillMount() {
    // this.props = {
    //   actions: {
    //     fetchTalks: fetchTalks
    //   },
    //   isLoading: false,
    //   isEmpty: false,
    //   talks: []
    // }
    this.props.actions.fetchTalks()
  }

  renderContent() {
    if (this.props.isLoading) return undefined
    return this.props.talks.length === 0
      ? <EmptyView text='Sorry, there are no upcoming talks'/>
      : <TalkView talks = {this.props.talks} />
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar name={this.title}/>
        <Loader display={this.props.isLoading} />
        {this.renderContent()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  talks: state.talks.data,
  isEmpty: state.talks.length === 0,
  isLoading: state.talks.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(fetchTalks, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TalksCalendarPresenter)