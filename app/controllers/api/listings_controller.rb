class Api::ListingsController < ApplicationController

    def index 

    end

    def show 
      @listing = Listing.find(params[:id])

      render "/api/listings/show"
    end

end