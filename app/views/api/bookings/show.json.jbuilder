json.booking do 
    json.extract! @booking, :id, :check_in, :check_out, :listing_id, :guest_id 
end