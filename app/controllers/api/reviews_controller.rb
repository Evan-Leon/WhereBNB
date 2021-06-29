class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :single]
    
    def create 
        @review = Review.new(review_params)

        if @review.save 
            render "api/reviews/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show 
        user = User.find(params[:id])
        @reviews = user.reviews
        render "api/reviews/index"

    end

    def single 
        @review = Review.find(params[:id]) 
        render "api/reviews/show"
    end

    def destroy 
        @review = Review.find(params[:id])
        @review.destroy
        render 'api/reviews/show'
    end

    def update 
         @review = review.find(params[:id])

        if @review.update_attributes(review_params)
            render '/api/reviews/show'
        else
            render json: ["Could not update review, try again!"], status: 404
        end
    end

    def review_params
        params.require(:review).permit(:rating, :body, :listing_id, :guest_id)
    end
end