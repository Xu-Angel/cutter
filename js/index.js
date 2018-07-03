/**
 * 获取滚动条距离顶部和左侧的距离，兼容IE6+,Firefox,Chrome等
 */
//cSpell:disable
function scroll(){
  // 判断是否有window.pageXOffset
  if (window.pageYOffset){
      return {
          top: pageYOffset,
          left: pageXOffset
      };
  }
  // 再判断是否有声明DTD
  else if(document.compatMode == 'BackCompat'){
      return {
          top: document.body.scrollTop,
          left: document.body.scrollLeft
      }
  }
  // 默认使用documentElement
  else{
      return {
          top: document.documentElement.scrollTop,
          left: document.documentElement.scrollLeft
      }
  }
}
/* back to top */
const backTop = document.querySelector('.back-top');
const tohead = document.querySelector('.to-head');
BackTop(backTop)
function BackTop (el) {
  window.onscroll=function(){
    if(scroll().top>100){
      el.style.display='block'
}else{
  el.style.display='none'
}
 }
//返回
window.onload = function () {
    (el.onclick = function back(){
        if (scroll().top > 0) {
            window.requestAnimationFrame(back);//window 回调
            window.scrollTo (0,scroll().top - (scroll().top/5));
        }
})();}
}
tohead.onclick = function back(){
  if (scroll().top > 0) {
     const tt=setInterval( function () {
       if (scroll().top < 1 ) {
        window.scrollTo (0,0)
         clearInterval(tt)
       }
      window.scrollTo (0,scroll().top - (scroll().top/5))
      back()
     }, 40)
  }
}
/* 广告轮播 */
const con=document.querySelector('.advertise .content');carousel(con,undefined,undefined,3000,10);
/* banner轮播 */
const imgArr = document.querySelectorAll('.carousel .img li');
const docArr = document.querySelectorAll('.carousel .doc li');
