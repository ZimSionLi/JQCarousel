// JavaScript Document


;!function($,w,d,u){
	
	$.fn.carousel = function(options){
		
		var defaults = {
			speed:800,//播放速度
			animate:'easeOutCubic',//动画类型
			delay:3000,//播放间隔
			hideNav:false//是否隐藏导航按钮
		};
		
		var settins = $.extend({},defaults,options || {});
		
		return this.each(function(){
						
			var $this = $(this),
				container_width = $this.width(),//容器宽度
				container_height = $this.height(),//容器高度
				imgs = $this.children(".carousel-imgs").eq(0),//ul
				size = imgs.children("li").length,//li的个数
				navLeft = $this.children(".carousel-nav-left").eq(0),//左箭头
				navRight = $this.children(".carousel-nav-right").eq(0),//右箭头
				dots = $this.children(".carousel-dots").eq(0);//点集合
									
			/****************************** 初始化开始 ******************************/
			
			//尺寸
			imgs.width(container_width * size);
			imgs.children("li").width(container_width);
			
			//左右导航
			settins.hideNav ? !function(){
				navLeft.css("display","none");
				navRight.css("display","none");
			}() : false;
			
			//点
			var dots_init = function(i){
				dots.find("i").removeClass("carousel-dot-on").addClass("carousel-dot-off");
				dots.find("i").eq(i).addClass("carousel-dot-on");
			};
			dots_init(0);
			
			
			/****************************** 初始化结束 ******************************/
			
			
			//轮播
			var playId,index = 0;
			var play = function(){
				playId = w.setInterval(function(){
					next();
				},settins.delay);
			};
			
			//暂停
			var stop = function(){
				w.clearInterval(playId);
			};
			
			//上一张
			var prev = function(){
				index--;
				index = index === -1 ? size-1 : index;
				execute();
			};
			
			//下一张
			var next = function(){
				index++;
				index = index === size ? 0 : index;
				execute();
			};
			
			//指定张
			var goto = function(i){
				index = i;
				execute();
			};
			
			//执行动画
			var execute = function(){
				imgs.stop(true).animate({marginLeft: -1 * container_width * index},settins.speed,settins.animate,function(){
					dots_init(index);
				});
			};
			
			
			/****************************** 事件绑定 开始 ******************************/
			
			//悬浮容器，停止播放
			$this.hover(function(){
				stop();
				if(!settins.hideNav){
					navLeft.css("display","inline-block");
					navRight.css("display","inline-block");
				}
			},function(){
				play();
				if(!settins.hideNav){
					navLeft.css("display","none");
					navRight.css("display","none");
				}
			});
			
			//导航事件
			if(!settins.hideNav){
				navLeft.click(function(){
					if(!imgs.is(":animated"))
						prev();
				});
				navRight.click(function(){
					if(!imgs.is(":animated"))
					next();
				});
			}
			
			//点悬浮事件
			var dots_timer_id = null;
			dots.find("i").hover(function(){
				var j = dots.find("i").index(this);
				dots_timer_id = w.setTimeout(function(){
					goto(j);
				},400);
			},function(){
				if(dots_timer_id){
					w.clearTimeout(dots_timer_id);
				}	
			});
			
			/****************************** 事件绑定 结束 ******************************/
			
			//开始播放
			play();
		});
	};
}(jQuery,window,document);

