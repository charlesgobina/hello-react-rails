Rails.application.routes.draw do
  get 'static/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static#index"

  namespace :v1, defaults: { format: :json } do
    get 'greetings', to: 'greetings#index'
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
