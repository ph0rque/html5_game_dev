require 'rubygems'
require 'sinatra'

enable :static

get '/' do
  "Links to assigments coming shortly!"
end

#get '/assignment/:assign_number' do
#  File.read(File.join('assigment', "#{params[:assign_number]}.html"))
#end
