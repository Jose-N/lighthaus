class SearchesController < ApplicationController
  def index
    @key = ENV['YOUTUBE_API']
  end

  def youtube
  end

  def twitch
  end

  def twitter
  end
end
