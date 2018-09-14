import * as React from 'react'
import { Link } from 'react-router-dom'

export default function EventsList(props) {
  if (!props.events) return 'loading'
  return (<div>
    <h1>All Events</h1>

    <ul>
    { props.events.map(
      event => <li key={event.id}><Link to={`/events/${event.id}`}>{ event.name }</Link></li>) }
    </ul>
  </div>)
}
