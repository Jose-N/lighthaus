Rails.application.routes.draw do
  root 'searches#index'

  resources :searches, only: [:index]
  get '/youtube', to:'searches#youtube'
  get '/twitch', to:'searches#twitch'
  get '/twitter', to:'searches#twitter'
end
