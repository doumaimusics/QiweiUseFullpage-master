$(function(){
    $('#main').fullpage({
      //滚动一屏的时间
      // scrollingSpeed: 1000,
      //index.html#jiewei (分享给别人)
      anchors:['page-1','page-2','page-3','page-4','page-5','page-6','page-7','page-8','page-9'],
      //需要固定定位的元素
      fixedElements:'#fix,.heder nav',

      //设置每个section给固定定位元素留下的位置
      paddingTop:20,
      paddingBottom:30,

      // 当滚动到底部或顶部之后能不能继续滚动
      continuousVertical:true,
      // 是否出现导航小点
      navigation:false,
      navigationPosition:'left',

      // 每一个小点的提示文字
      navigationTooltips:['a','b','c','d'],
      // 到每一屏的时候是否出现提示文字
      showActiveTooltip:true,

      // 进入一屏的时候 会调用afterLoad
      afterLoad:function(name,index){
        // name是当前这张的名字  index当前是第几张
      },
      // 离开一屏的时候 会调用onLeave
      onLeave:function(index,next,dir){
          // index 从哪张离开的
          // next  去到了哪张
          // dir   up  down
          if( index === 5 ){
            $("#section5 h1").addClass('animate-fei');
          }
          if( index === 1){
            // 离开失效
            return false;
          }
          /*css文件中可以这样写*/
          /*
          .animate-fei{
            animation:fei .5s ease .3s both;
          }
          @keyframes fei{
            xxxxxxxxx
          }
          */
      }
    });
});