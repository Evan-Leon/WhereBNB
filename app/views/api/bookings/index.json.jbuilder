json.array! @bookings do |booking|
    json.extract! booking, :id, :check_in, :check_out, :host_id, :guest_id, :num_guests 
    
end