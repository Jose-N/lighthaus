class YoutubeController < ApplicationController
  def result
    channel_id = params[:channel_id]
    key = ENV['YOUTUBE_API']
    response = HTTParty.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=#{channel_id}&fields=items(snippet(localized%2CpublishedAt%2Cthumbnails(default%2Furl%2Chigh%2Furl)%2Ctitle)%2Cstatistics(subscriberCount%2CvideoCount%2CviewCount))%2Ckind&key=#{key}").body

    render json: response 
  end

  def display
  end
end
