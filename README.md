# JQCarousel

基于JQ的简单轮播图。

能够自定义容器宽度、高度、播放速度、动画类型、播放间隔、是否隐藏导航按钮。

## 使用教程

1、引入CSS
```
<link href="css/carousel.css" rel="stylesheet">
<link href="font/iconfont.css" rel="stylesheet">
```

2、引入JS
```
<script src="js/jquery.min.js"></script>
<script src="js/jquery.easing.min.js"></script>
<script src="js/carousel.js"></script>
```
3、HTML代码
```
<div class="carousel-container" id="carousel01">
  <ul class="carousel-imgs">
    <li> <a href=""> <img src="img/1.jpg"> </a> </li>
    <li> <a href=""> <img src="img/2.jpg"> </a> </li>
    <li> <a href=""> <img src="img/3.jpg"> </a> </li>
    <li> <a href=""> <img src="img/4.jpg"> </a> </li>
    <li> <a href=""> <img src="img/5.jpg"> </a> </li>
  </ul>
  <div class="carousel-dots">
    <a href="javascript:;"><i class="carousel carousel-dian-copy"></i></a>
    <a href="javascript:;"><i class="carousel carousel-dian-copy"></i></a>
    <a href="javascript:;"><i class="carousel carousel-dian-copy"></i></a>
    <a href="javascript:;"><i class="carousel carousel-dian-copy"></i></a>
    <a href="javascript:;"><i class="carousel carousel-dian-copy"></i></a>
  </div>
  <a href="javascript:;" class="carousel-nav-left">
    <i class="carousel carousel-xiangzuojiantou"></i>
  </a>
  <a href="javascript:;" class="carousel-nav-right" id="01">
    <i class="carousel carousel-xiangyoujiantou"></i>
  </a>
</div>
```

4、CSS中定义容器宽度高度
```
#carousel01{
  width:800px;
  height:450px;
}
```

5、JS中调用carousel方法
```
<script>
  $(function(){
    $("#carousel01").carousel();
  });
</script>
```

## 自定义参数
```
$("#carousel01").carousel({
  speed:800,//播放速度
  animate:'easeOutCubic',//动画类型
  delay:3000,//播放间隔
  hideNav:false//是否隐藏导航按钮
});
```

## 说明
```
动画类型请参考jQuery Easing。
```
