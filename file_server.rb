require 'rubygems'
require 'sinatra'

get '/' do
  "Links to tasks, etc. coming shortly!"
end

get '/tasks/:number/:file' do
  File.read(File.join('tasks', "#{params[:number]}", "#{params[:file]}"))
end

get '/tasks/:number' do
  File.read(File.join('tasks', "#{params[:number]}", "index.html"))
end
