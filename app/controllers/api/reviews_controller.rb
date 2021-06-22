class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in
    
    def create 
        @review = Review.new(review_params)

        if @review.save 
            render "api/reviews/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show 
        
        @reviews = Listing.get_reviews(params[:id])
        render "api/reviews/show"

    end

    def review_params
        params.require(:review).permit(:rating, :body, :listing_id, :guest_id)
    end
end