json.array! @bookings do |booking|
    json.extract! booking, :id, :check_in, :check_out, :host_id, :guest_id 
    
end