Rails.application.routes.draw do
  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'
  }
  devise_scope :user do
    get "/login", :to => "users/sessions#new"
    get "/registration", :to => "users/registrations#new"
    post "/registration/create", :to => "users/registrations#create"
  end

  root "groups#new"

  get "task" => "tasks#index"
  get "member" => "members#index"
  get "chat" => "chats#index"

  resources :mypages, omly: [:index, :edit, :update]
end
