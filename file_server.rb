require 'rubygems'
require 'sinatra'

get '/' do
  "Links to tasks, etc. coming shortly!"
end

get '/tasks/:number/:file' do
  #  :content_type get_content_from_file_using_gem(params[:file])
  #  https://github.com/blackwinter/ruby-filemagic
  
  File.read(File.join('tasks', "#{params[:number]}", "#{params[:file]}"))
end

get '/tasks/:number' do
  File.read(File.join('tasks', "#{params[:number]}", "index.html"))
end
