export const fetchBookings = () => (
    $.ajax({
        method: 'GET',
        url: '/api/bookings'
    })
)

export const fetchBooking = (bookingId) => (
    $.ajax({
      method: 'GET',
      url: `/api/bookings/${bookingId}`
    })
)

