import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import axios from 'axios'

const localizer = momentLocalizer(moment)

const AppointmentList = () => {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:9999/booking')
      const data = response.data

      const events = data.map((item) => ({
        title: item.customer_name,
        start: new Date(item.appointment_date),
        end: new Date(new Date(item.appointment_date).getTime() + 60 * 60 * 1000), // assuming 1 hour for the appointment
        ...item
      }))

      setEvents(events)
    } catch (error) {
      console.error('Error fetching appointments:', error)
    }
  }
console.log(events);
  const handleSelectEvent = (event) => {
    setSelectedEvent(event)
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />
      {selectedEvent && (
        <div style={{ marginTop: 20 }}>
          <h3>Appointment Details</h3>
          <p><strong>Customer Name:</strong> {selectedEvent.customer_name}</p>
          <p><strong>Phone Number:</strong> {selectedEvent.phone_number}</p>
          <p><strong>Email:</strong> {selectedEvent.email}</p>
          <p><strong>Address:</strong> {selectedEvent.address}</p>
          <p><strong>Appointment Date:</strong> {new Date(selectedEvent.appointment_date).toLocaleString()}</p>
          <p><strong>Order Status:</strong> {selectedEvent.order_status}</p>
          <p><strong>Pet Info:</strong></p>
          <ul>
            <li><strong>Pet Name:</strong> {selectedEvent.pet_info.pet_name}</li>
            <li><strong>Species:</strong> {selectedEvent.pet_info.species}</li>
            <li><strong>Breed:</strong> {selectedEvent.pet_info.breed}</li>
            <li><strong>Age:</strong> {selectedEvent.pet_info.age}</li>
            <li><strong>Weight:</strong> {selectedEvent.pet_info.weight}</li>
            <li><strong>Notes:</strong> {selectedEvent.pet_info.notes}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default AppointmentList
