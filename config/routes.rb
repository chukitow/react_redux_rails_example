Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :create]
    end
  end

  root 'home#index'

  get '/*all', to: 'home#index'
end
