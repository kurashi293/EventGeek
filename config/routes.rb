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


  root "groups#index"


  resources :users, only: [:new, :create, :index, :show, :edit, :update, :destroy] do
    member do   #:usersにidを持たせたcompleateアクションを作成
      get "confirmation"
      get 'compleate'
      get "new_icon"
      get "new_email"
      get "new_password"
    end
  end


  resources :groups, only: [:index, :new, :create, :show, :edit, :update, :destroy] do
    collection do
      get "incremental_search"
      get "category_search"
      get "advanced_search"
    end

    member do
      get "information"
    end

    resources :tasks, only: [:index, :create, :show, :edit, :update, :destroy]
    resources :statuses, only: [:index, :new, :create, :edit, :update]
    resources :chats, only: [:index, :create, :destroy]
    resources :mypages, only: [:index]
    # namespace :api do
    #   resources :messages, only: :index, defaults: { format: 'json' }
    # end
  end
end