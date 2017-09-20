class YoutubeController < ApplicationController
  def result
    channel_id = params[:channel_id]
    key = ENV['YOUTUBE_API']
    response = HTTParty.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=#{channel_id}&fields=items(snippet(localized%2CpublishedAt%2Cthumbnails(default%2Furl%2Chigh%2Furl)%2Ctitle)%2Cstatistics(subscriberCount%2CvideoCount%2CviewCount))%2Ckind&key=#{key}").body

    render json: response 
  end

  def display
    today = Time.now.to_datetime.rfc3339.gsub(':','%3A').to_s
    today = today[0..-9].concat('Z')
    lastweek = (Time.now - (7*24*60*60)).to_datetime.rfc3339.gsub(':','%3A').to_s
    lastweek = lastweek[0..-9].concat('Z')

    channel_id = params[:channel_id]
    key = ENV['YOUTUBE_API']
    @response = HTTParty.get("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=#{channel_id}&maxResults=25&publishedAfter=#{lastweek}&publishedBefore=#{today}&fields=items(id%2FvideoId%2Csnippet(description%2CpublishedAt%2Cthumbnails(default%2Chigh)%2Ctitle))&key=#{key}").body
  end
end
