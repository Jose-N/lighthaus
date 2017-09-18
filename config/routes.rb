Rails.application.routes.draw do
  root 'searches#index'
  resources :searches, only: [:index]
end
