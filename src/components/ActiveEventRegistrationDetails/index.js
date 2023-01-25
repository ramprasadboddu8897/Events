// Write your code here
import './index.css'

const eventStatusConstants = {
  initial: 'initial',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
  yetToRegistered: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  // no event screen
  const noEventScreen = () => (
    <div className="no-event-display">
      <p className="no-event-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  // yet to register screen
  const yetToRegisterScreen = () => (
    <div className="screen-container">
      <div className="content-container">
        <img
          className="screen_image"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
        <p className="description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art foam.
        </p>
        <button className="button" type="button">
          Register Here
        </button>
      </div>
    </div>
  )

  // Registration closed screen
  const registerClosedScreen = () => (
    <div className="screen-container">
      <div className="content-container">
        <img
          className="screen_image"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
        <h1 className="registration_closed_text">
          Registrations are Closed Now!
        </h1>
        <p className="description">
          Stay tuned. We will reopen the registrations soon!
        </p>
      </div>
    </div>
  )

  // Registered
  const registeredScreen = () => (
    <div className="screen-container">
      <div className="content-container">
        <img
          className="screen_image"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
        <h1 className="registration_closed_text">
          You have already registered for the event
        </h1>
      </div>
    </div>
  )

  switch (eventStatus) {
    case eventStatusConstants.initial:
      return noEventScreen()
    case eventStatusConstants.yetToRegistered:
      return yetToRegisterScreen()
    case eventStatusConstants.registrationClosed:
      return registerClosedScreen()
    case eventStatusConstants.registered:
      return registeredScreen()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
