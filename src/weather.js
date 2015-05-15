(function($){
	

	  // 插件的定义    
  $.weather = function(options) {
    // build main options before element iteration    
   var opts = $.extend({}, $.weather.defaults, options);
   opts.api=opts.api.replace("[area]",opts.area).replace("[ak]",opts.appkey);
   $.getJSON(
		opts.api, 
		function(data) {
			if(data.status=="success"){
				opts.success(data.results[0]);
			}else{
				opts.faile();
			}
		}
    );  
  }; 
 	 // 插件的defaults    
  $.weather.defaults = {    
    appkey: 'D6acdaad97ed821180f912ff469742e0',    
    api: 'http://api.map.baidu.com/telematics/v3/weather?location=[area]&output=json&ak=[ak]&callback=?',
    area:'北京',
	success:function(obj){return false;},
	faile:function(){return false;}
  };    
// 闭包结束    
})(jQuery);