 $(function(){

 	//左侧菜单栏
 	var navNock=[
 		[
 			{"title":"Alibaba"},
 			{"title":"List","link":"../ali/list.html"},
 			{"title":"Design","link":"../ali/design.html"},
 		    {"title":"Custom","link":"../ali/custom.html"},
			{"title":"Copywriter","link":"../ali/copywriter.html"},
			{"title":"Dev","link":"../ali/dev.html"},
 		],
 		[
 			{"title":"有赞"},
 			{"title":"List","link":"../yz/list.html"},
 			{"title":"Design","link":"../yz/design.html"},
 			{"title":"Dev","link":"../yz/dev.html"},
 		],
 		[
 			{"title":"Aliexpress"},
 			{"title":"List","link":"../ae/list.html"},
 			{"title":"Design","link":"../ae/design.html"},
 			{"title":"Dev","link":"../ae/dev.html"},
 		],
		[
 			{"title":"Links"},
 			{"title":"常用入口","link":"../links/link.html"},
 			
 		],
		[
 			{"title":"内部入口"},
 			{"title":"常用入口","link":"../work/link.html"},
 			{"title":"Weex客户","link":"../work/weex.html"},
 			{"title":"工作手册","link":"../work/work.html"},
 		]
		
 	]
 	var navHtml="";
    $.each(navNock, function(k,val) {
		var subNavHtml="";
		$.each(navNock[k], function(j,valSub) {
			if(j>0){
				subNavHtml+='<li><a class="nav_item" href="'+navNock[k][j].link+'">'+navNock[k][j].title+'</a></li>';
			}
		});
        navHtml+='<div class="nav_group">'+
	        	'<div class="nav_title">'+navNock[k][0].title+'<em>></em></div>'+
	            '<ul>'+ subNavHtml +'</ul>'+
	        '</div>';
        });
    $(".nav").append(navHtml);

	//左侧菜单栏点击效果
    $(".nav_title").click(function() {
        $(this).siblings('ul').toggle(300);
    });




});