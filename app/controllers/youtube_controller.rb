class YoutubeController < ApplicationController
  def index
  end

  def result
    channel_id = params[:channel_id]
    key = ENV['YOUTUBE_API']
    response = HTTParty.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=#{channel_id}&fields=items(snippet(localized%2CpublishedAt%2Cthumbnails(default%2Furl%2Chigh%2Furl)%2Ctitle)%2Cstatistics(subscriberCount%2CvideoCount%2CviewCount))%2Ckind&key=#{key}").body

    render json: response 
  end

  def display
    today = Time.now.to_datetime.rfc3339.gsub(':','%3A').to_s
    today = today[0..-9].concat('Z')
    lastweek = (Time.now - (3*7*24*60*60)).to_datetime.rfc3339.gsub(':','%3A').to_s
    lastweek = lastweek[0..-9].concat('Z')

    channel_id = params[:channel_id]
    key = ENV['YOUTUBE_API']
    @response = HTTParty.get("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=#{channel_id}&maxResults=25&order=date&publishedAfter=#{lastweek}&publishedBefore=#{today}&fields=items(id%2FvideoId%2Csnippet(description%2CpublishedAt%2Cthumbnails(default%2Chigh)%2Ctitle))&key=#{key}").body
  end

  def video
    video_id = params[:video_id]
    key = ENV['YOUTUBE_API']

    response = HTTParty.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=#{video_id}+&fields=items(contentDetails(definition%2Cdimension%2Cduration)%2CfileDetails%2FdurationMs%2Cid%2Csnippet%2Fdescription%2Cstatistics)&key=#{key}")
    render json: response
  end

  def comments
    video_id = params[:video_id]
    key = ENV['YOUTUBE_API']

    @response = HTTParty.get("https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&order=time&videoId=#{video_id}&fields=items(snippet(topLevelComment(snippet(authorDisplayName%2CauthorProfileImageUrl%2ClikeCount%2CpublishedAt%2CtextDisplay%2CtextOriginal%2CupdatedAt))))%2CnextPageToken%2CtokenPagination&key=#{key}").body
  end
end
