Rails.application.routes.draw do
  root 'searches#index'

  resources :searches, only: [:index]
  resources :youtube, only: [:index]
  resources :twitter, only: [:index]
  resources :twitch, only: [:index]

  post 'youtube/result/:channel_id', to:'youtube#result'
  get 'youtube/display/:channel_id', to:'youtube#display'
end
