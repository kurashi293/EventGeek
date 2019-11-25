Rails.application.routes.draw do
  get "task" => "tasks#index"
  get "member" => "members#index"
end
