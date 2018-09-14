import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  render() {
    console.log(this.props.event)
    return <EventDetails event = {this.props.event}/>
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent})(EventDetailsContainer)
