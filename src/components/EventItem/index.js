// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, displayStatusEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventItemDetails

  const onClickEvent = () => {
    displayStatusEvent(registrationStatus)
  }

  return (
    <li onClick={onClickEvent} className="eventItem">
      <button className="event-button" type="button">
        <img className="event-item-image" alt="event" src={imageUrl} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
