//cSpell:disable
/* back to top */
const backTop = document.querySelector('.back-top');
const tohead = document.querySelector('.to-head');
BackTop(backTop)

function BackTop(el) {
  window.onscroll = function() {
    if (scroll().top > 100) {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  }
  //返回
  window.onload = function() {
    (el.onclick = function back() {
      if (scroll().top > 0) {
        window.requestAnimationFrame(back); //window 回调
        window.scrollTo(0, scroll().top - (scroll().top / 5));
      }
    })();
  }
}
tohead.onclick = function back() {
  if (scroll().top > 0) {
    const tt = setInterval(function() {
      if (scroll().top < 1) {
        window.scrollTo(0, 0)
        clearInterval(tt)
      }
      window.scrollTo(0, scroll().top - (scroll().top / 5))
      back()
    }, 40)
  }
}
/* 广告轮播 */
const con = document.querySelector('.advertise .content');
carousel(con, undefined, undefined, 3000, 10);
/* banner轮播 */
const imgArr = document.querySelectorAll('.carousel .img li')
const docArr = document.querySelectorAll('.carousel .doc li')
let inde = 0 // 图片索引
for (var pp = 0; pp < imgArr.length; pp++) {
  imgArr[pp].onmouseover = function() {
    clearInterval(imgArr.timer)
  }
  imgArr[pp].onmouseout = function() {
    imgArr.timer = setInterval(auto, 2000);
  }
  docArr[pp].index = pp;
  docArr[pp].onmouseover = function() {
    clearInterval(imgArr.timer)
    for (var ii = 0; ii < imgArr.length; ii++) {
      docArr[ii].className = '';
      imgArr[ii].style.zIndex = '0';
      imgArr[ii].opacity = '0';
    }
    this.className = 'active';
    imgArr[this.index].style.zIndex = '1';
    animation(imgArr[this.index], {
      opacity: 1
    })
    inde = this.index;
  }
  docArr[pp].onmouseout = function() {
    for (var kk = 0; kk < imgArr.length; kk++) {
      docArr[kk].className = '';
      imgArr[kk].style.zIndex = '0';
      imgArr[kk].style.opacity = '0';
    }
    docArr[this.index].className = 'active';
    imgArr[this.index].style.zIndex = '1';
    imgArr[this.index].style.opacity = '1';
    inde = this.index + 1;
    if (inde > imgArr.length - 1) {
      inde = 0
    } else {
      inde = inde
    }
    imgArr.timer = setInterval(auto, 2000);
  }
}

/**
 * 轮播自动函数
 */
function auto() {
  for (var gg = 0; gg < imgArr.length; gg++) {
    imgArr[gg].style.zIndex = '0';
    imgArr[gg].style.opacity = '0';
    docArr[gg].className = '';
  }

  imgArr[inde].style.zIndex = '1';
  animation(imgArr[inde], {
    opacity: 1
  })
  docArr[inde].className = 'active';
  inde++;
  if (inde == imgArr.length) {
    inde = 0
  }
}
auto(); //加载直接生成第一张
imgArr.timer = setInterval(auto, 3500);
/* 倒计时 */
const ele = document.querySelectorAll('.seckill-content .seckill-one .time span')
seckillTime('2018/07/09 20:16:0', ele)
/**
 * 
 * @param {type:String} time yeay/month/day hour:min:sec
 * @param {type:Dom element} el element of the Date count
 */
function seckillTime(time, el) {
  const daytxt = el[0]
  const hourtxt = el[1]
  const mintxt = el[2]
  const sectxt = el[3]

  function Time() {
    let end = new Date(time).getTime()
    let now = Date.now()
    let range = end - now
    let day = parseInt(range / (24 * 3600000))
    range = range % (24 * 3600000)
    let hours = parseInt(range / 3600000)
    range = range % 3600000
    let minutes = parseInt(range / 60000)
    range = range % 60000
    let seconds = parseInt(range / 1000)
    if (range < 0) {
      minutes = day = hours = seconds = 0
    }
    return {
      day,
      hours,
      minutes,
      seconds
    }
  }
/**
 * 
 * @param {type:Number} val  units digit to tens digit
 */
  function convert(val) {
    return val >= 10 ? val : '0' + val
  }

  function show() {
    daytxt.innerText = convert(Time().day)
    hourtxt.innerText = convert(Time().hours)
    mintxt.innerText = convert(Time().minutes)
    sectxt.innerText = convert(Time().seconds)
  }
  show()
  const timer = setInterval(function() {
    if (Time().seconds === 0) {
        console.log('bye')
      clearInterval(timer)
    }
    show()
  }, 1000)
}
/*选项卡切换 */

/*楼层跳跃 */
/*媒体报道轮播 */

