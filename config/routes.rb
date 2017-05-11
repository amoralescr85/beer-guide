Rails.application.routes.draw do
  devise_for :users
  root("beers#home")
  # root to: "beers#home"
  resources :users
  resources :beers, only: [:index, :create, :show] do
    resources :reviews, only: [:new, :edit, :update]
    resources :favorites, only: [:new, :create]
  end

  namespace :api do
    namespace :v1 do
       resources :beers
       resources :reviews
       resources :users, only: [:show, :index]
     end
  end


  resources :favorites, only: [:destroy]
  resources :reviews, only: [:show, :destroy] do
    resources :votes
  end
end
