

@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :body, :rating, :listing_id, :created_at, :guest, :listing
    end
end