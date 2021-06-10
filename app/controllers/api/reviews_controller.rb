class Api::ReviewsController < ApplicationController
    before_action :require_logged_in
    
    def create 
        @review = Review.new(review_params)

        if @review.save 
            render "api/reviews/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def review_params
        params.require(:review).permit(:rating, :body, :listing_id, :guest_id, :booking_id)
    end
end