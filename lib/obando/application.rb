require "sinatra/base"
require "sinatra/reloader"
require "sinatra-initializers"
require "sinatra/r18n"

module Obando
 class Application < Sinatra::Base
   enable :logging, :sessions
   enable :dump_errors, :show_exceptions if development?

   configure :development do
    register Sinatra::Reloader
   end

   before do
    session[:locale] = params[:locale] if params[:locale]
   end

   use Rack::Logger
   use Rack::Session::Cookie


   get '/' do
    send_file File.expand_path('index.html', settings.public_folder)
   end

   get '/' do
    send_file File.expland_path('impact.html', settings.public_folder)
   end
 end
end
