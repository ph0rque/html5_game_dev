require 'rubygems'
require 'sinatra'

get '/' do
  "Links to assignments coming shortly!"
end

get '/assignments/:number/:file' do
  File.read(File.join('assignments', "#{params[:number]}", "#{params[:file]}"))
end

get '/assignments/:number' do
  File.read(File.join('assignments', "#{params[:number]}", "index.html"))
end
