Rails.application.routes.draw do
  devise_for :users
  root to: "beers#home"
  resources :users
  resources :beers, only: [:index, :show] do
    resources :reviews, only: [:new, :edit, :update]
    resources :favorites, only: [:new, :create]
  end

  resources :favorites, only: [:destroy]
  resources :reviews, only: [:show, :destroy] do
    resources :votes
  end
end
