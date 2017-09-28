Rails.application.routes.draw do
  devise_for :users
  root 'searches#index'

  resources :searches, only: [:index]
  resources :youtube, only: [:index]
  resources :twitter, only: [:index]
  resources :twitch, only: [:index]

  post 'youtube/result/:channel_id', to:'youtube#result'
  get 'youtube/display/:channel_id', to:'youtube#display'
  get 'youtube/video/:video_id', to:'youtube#video'
  get 'youtube/comments/:video_id', to:'youtube#comments'
  get 'youtube/charts/videos/:video_ids', to:'youtube#videochart'

  resources :data, only: [:index, :show, :new, :create, :edit, :update, :destroy]
end
