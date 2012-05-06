require "rubygems"
require "bundler"
Bundler.require :default

base = File.dirname(__FILE__)
$:.unshift File.join(base, "lib")

require "obando"

Sinatra::Base.set(:root) { base }
run Obando::Application
