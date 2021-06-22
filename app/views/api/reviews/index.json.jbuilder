json.array! @reviews do |review|
    json.extract! review, :id, :body, :rating, :guest_id, :listing_id, :created_at 
end