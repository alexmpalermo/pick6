Rails.application.routes.draw do

  post "api/v1/login", to: "api/v1/sessions#create"
  get "api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  delete "api/v1/logout", to: "api/v1/sessions#destroy"
  post "api/v1/signup", to: "api/v1/users#create"
  post "api/v1/groups/join", to: "api/v1/groups#join"
  get "api/v1/groups/:id/weeks", to: "api/v1/weeks#index"

  # I want my api to be pick6.com/api/v1/resource
  namespace :api do
    namespace :v1 do
      resources :users
      resources :picks
      resources :games
      resources :groups
      resources :weeks
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
