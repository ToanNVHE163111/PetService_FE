import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import axios from 'axios'
import { Dialog } from 'primereact/dialog'
import { FormSelect, Table } from 'react-bootstrap'
import { toast } from 'react-toastify'

const localizer = momentLocalizer(moment)

const AppointmentList = () => {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [visible, setVisible] = useState(false);
  const [orderStatusValue, setOrderStatusValue] = useState(selectedEvent?.order_status);



  useEffect(() => {
    fetchAppointments()
  }, [visible])

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
  const handleSelectEvent = (event) => {
    setSelectedEvent(event)
    setVisible(true);
  }


  const handleStatusChange = (e, orderId) => {
    e.preventDefault();
    const newStatus = e.target.value; // Lấy giá trị mới của status từ dropdown
    axios
      .put("http://localhost:9999/booking/status/" + orderId, {
        order_status: newStatus,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Status updated successfully!");
          setOrderStatusValue(newStatus); // Cập nhật state phụ
          setSelectedEvent({
            ...selectedEvent,
            order_status: newStatus,
          });
          // Cập nhật trạng thái của đơn hàng trong state

        } else {
          console.log("Edit Status failed");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

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

        <Dialog
          visible={visible}
          onHide={() => setVisible(false)}
          className="bg-light dialogForm"
          style={{ width: "70vw" }}
          modal
          header={<div className="custom-dialog-header">Appointment Details</div>}
        >
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>Customer Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Appointment Date</th>
                <th>Order Status</th>
              </tr>
            </thead>

            <tbody className="text-center">
              <tr key={selectedEvent._id}>
                <td>{selectedEvent.customer_name}</td>
                <td>{selectedEvent.phone_number}</td>
                <td>{selectedEvent.email}</td>
                <td>{selectedEvent.address}</td>
                <td>{new Date(selectedEvent.appointment_date).toLocaleString()}</td>
                <td>
                  <FormSelect
                    style={{
                      borderRadius: "30px",
                      width: "110px",
                      border: "none",
                      paddingLeft: "8px",
                    }}
                    value={selectedEvent.order_status}
                    onChange={(e) => {
                      if (
                        e.target.value === "Pending"
                      ) {
                        return;
                      }
                      setOrderStatusValue(e.target.value);
                      handleStatusChange(e, selectedEvent._id);
                    }}
                    disabled={
                      selectedEvent.order_status === "Completed" || selectedEvent.order_status === "Canceled"
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Canceled">Canceled</option>
                  </FormSelect>
                </td>
              </tr>

            </tbody>
          </Table>
          <Table striped bordered hover>
            <thead className="text-center">
              <tr >
                <th>Pet Name</th>
                <th>Species</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Weight</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr key={selectedEvent._id}>
                <td>{selectedEvent.pet_info.pet_name}</td>
                <td>{selectedEvent.pet_info.species}</td>
                <td>{selectedEvent.pet_info.breed}</td>
                <td>{selectedEvent.pet_info.age}</td>
                <td>{selectedEvent.pet_info.weight}</td>
                <td>{selectedEvent.pet_info.notes}</td>
              </tr>

            </tbody>
          </Table>
        </Dialog>


      )}
    </div>
  )
}

export default AppointmentList
