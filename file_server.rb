require 'rubygems'
require 'sinatra'

get '/' do
  "Links to assignments coming shortly!"
end

#get '/assignment/:assign_number' do
#  File.read(File.join('assigment', "#{params[:assign_number]}.html"))
#end
