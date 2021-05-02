import React from 'react'

// import '../../css/BookingTriggerButton.css'

const TriggerButton = ({ triggerText, buttonRef, showModal}) => {

    return (
        <button
            className="Booking__submit"
            ref={buttonRef}
            onClick={showModal}
        >
            {triggerText}
        </button>
    )
}

export default TriggerButton