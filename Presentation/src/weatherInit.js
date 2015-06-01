define(['weather'],function(){
	var dataWeather={
		currentCity:"北京",
		pm25:"0",
		index:[{
			des: "天气炎热，建议着短衫、短裙、短裤、薄型T恤衫等清凉夏季服装。",
            tipt: "穿衣指数",
            title: "穿衣",
            zs: "炎热"
		}],
		weather_data:[{
			date: "周一 06月01日 (实时：32℃)",
			dayPictureUrl: "http://api.map.baidu.com/images/weather/day/duoyun.png",
			nightPictureUrl: "http://api.map.baidu.com/images/weather/night/yin.png",
			temperature: "34 ~ 23℃",
			weather: "多云转阴",
			wind: "微风"
		}]
	};
	return{
		_dataWeather:dataWeather,
		initdata:function(contentId){
			$.weather({
				area:"北京",
				success:function(obj){
					this._dataWeather=obj;
					ko.applyBindings(this._dataWeather, $("#" + contentId)[0]);
			    }
			});
		}
	};
    
});