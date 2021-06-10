json.review do 
    json.extract! @review, :id, :rating, :listing_id, :guest_id, :booking_id
end