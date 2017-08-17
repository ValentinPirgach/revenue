Rails.application.routes.draw do
  devise_for :users, :controllers => { :registrations => "user/registrations" }
  root 'pages#index'

  get 'search_stocks', to: "stocks#search"
  get 'search_friends', to: "users#search"
  get 'my_portfolio', to: "users#my_portfolio"
  get 'my_friends', to: "users#my_friends"
  post 'add_friend', to: "users#add_friend"

  resources :user_stocks, except: [:update, :show, :edit]
  resources :users, only: [:show]
  resources :friendships, only: [:show, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
