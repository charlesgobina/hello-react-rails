class V1::GreetingsController < ApplicationController
  def index
    render json: { 
      message: Greeting.all.sample
    }
  end
end
