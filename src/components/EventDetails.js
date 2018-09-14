import * as React from 'react'
// import { Link } from 'react-router-dom'

export default function EventDetails(props) {
  if (!props.event) return 'loading'
  return (<div>
          <h1>{props.event.name}</h1>
          <i>{props.event.date}</i>
          <p>{props.event.description}</p>
          </div>)
}
