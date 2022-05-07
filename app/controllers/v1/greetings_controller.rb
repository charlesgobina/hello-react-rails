class V1::GreetingsController < ApplicationController
  def index
    render json: {
      message: Greeting.all.sample
    }.to_json
  end
end
