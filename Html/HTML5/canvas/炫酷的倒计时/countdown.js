var WINDOW_WIDTH = 1400;
var WINDOW_HEIGHT = 500;
var RADIUS = 8;
var MARGIN_LEFT = 30;
var MARGIN_TOP = 60;

const endTime = new Date("2/11/2021");

//倒计时一个小时
// let endTime = new Date();
// endTime.setTime(endTime.getTime() + 3600 * 1000)

var curShowTimeSeconds = 0;

var balls = [];
const colors = [
  "#33B5E5",
  "#0099CC",
  "#AA66CC",
  "#9933CC",
  "#99CC00",
  "#669900",
  "#FFBB33",
  "#FF8800",
  "#FF4444",
  "#CC0000",
];

window.onload = function () {
  WINDOW_WIDTH = document.body.clientWidth
  WINDOW_HEIGHT = document.body.clientHeight
  MARGIN_LEFT = Math.round(WINDOW_WIDTH / 20)
  MARGIN_TOP = Math.round(WINDOW_HEIGHT / 5)
  RADIUS=Math.round(WINDOW_WIDTH*4/5/140)

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;

  curShowTimeSeconds = getCurrentShowTimeSeconds();
  setInterval(function () {
    render(context);
    update();
  }, 50);
};

//计算指定时间到现在时间的数据
function getCurrentShowTimeSeconds() {
  var curTime = new Date();
  //倒计时
  // var ret = endTime.getTime() - curTime.getTime();
  // ret = Math.round(ret / 1000);
  
  //显示当前时间并⏲
  var ret=curTime.getHours()*3600+curTime.getMinutes()*60+curTime.getSeconds()
  

  return ret > 0 ? ret : 0;
}

//比较时间（刷新时间）,发生改变时添加小球
function update() {
  var nextShowTimeSeconds = getCurrentShowTimeSeconds();

  var nextHours = parseInt(nextShowTimeSeconds / 3600);
  var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60);
  var nextSeconds = nextShowTimeSeconds % 60;

  var curHours = parseInt(curShowTimeSeconds / 3600);
  var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60);
  var curSeconds = curShowTimeSeconds % 60;

  if (nextSeconds != curShowTimeSeconds) {
    if (parseInt(curHours / 1000) != parseInt(nextHours / 1000)) {
      addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 1000));
    }
    if (parseInt(curHours / 100) != parseInt(nextHours / 100)) {
      addBalls(
        MARGIN_LEFT + 15 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt((hours - parseInt(hours / 1000) * 1000) / 100)
      );
    }
    if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
      addBalls(
        MARGIN_LEFT + 30 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt((curHours - parseInt(curHours / 100) * 100) / 10)
      );
    }
    if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
      addBalls(
        MARGIN_LEFT + 45 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curHours / 10)
      );
    }

    if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
      addBalls(
        MARGIN_LEFT + 70 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curMinutes / 10)
      );
    }
    if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
      addBalls(
        MARGIN_LEFT + 85 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curMinutes % 10)
      );
    }

    if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
      addBalls(
        MARGIN_LEFT + 110 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curSeconds / 10)
      );
    }
    if (parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)) {
      addBalls(
        MARGIN_LEFT + 125 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curSeconds % 10)
      );
    }
    curShowTimeSeconds = nextShowTimeSeconds;
  }
  updateBalls();
  // console.log(balls.length);
}

//更新小球的运动状态
function updateBalls() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    balls[i].vy += balls[i].g;

    if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
      balls[i].y = WINDOW_HEIGHT - RADIUS;
      balls[i].vy = -balls[i].vy * 0.75;
    }
  }
  //删除不在画布中的小球，减少浏览器的运行压力
  var cnt = 0;
  for (var i = 0; i < balls.length; i++) {
    if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH)
      balls[cnt++] = balls[i];
  }
  while (balls.length > cnt) {//如果性能差---balls.length > Math.min(300,cnt)
    balls.pop();
  }
}

//当时间发生变化添加小球
function addBalls(x, y, num) {
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        var aBall = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 1.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
          vy: -5,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
        balls.push(aBall);
      }
    }
  }
}

//将curShowTimeSeconds分成hour，minutes，second
function render(cxt) {
  //清除canvas画布的内容
  cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

  var hours = parseInt(curShowTimeSeconds / 3600);
  var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60);
  var seconds = curShowTimeSeconds % 60;
  //获取数字
  renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 1000), cxt);
  renderDigit(
    MARGIN_LEFT + 15 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt((hours - parseInt(hours / 1000) * 1000) / 100),
    cxt
  );
  renderDigit(
    MARGIN_LEFT + 30 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt((hours - parseInt(hours / 100) * 100) / 10),
    cxt
  );
  renderDigit(
    MARGIN_LEFT + 45 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(hours % 10),
    cxt
  );
  renderDigit(MARGIN_LEFT + 60 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
  renderDigit(
    MARGIN_LEFT + 70 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(minutes / 10),
    cxt
  );
  renderDigit(
    MARGIN_LEFT + 85 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(minutes % 10),
    cxt
  );
  renderDigit(MARGIN_LEFT + 100 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
  renderDigit(
    MARGIN_LEFT + 110 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(seconds / 10),
    cxt
  );
  renderDigit(
    MARGIN_LEFT + 125 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(seconds % 10),
    cxt
  );

  for (var i = 0; i < balls.length; i++) {
    cxt.fillStyle = balls[i].color;
    cxt.beginPath();
    cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true);
    cxt.closePath();
    cxt.fill();
  }
}

//遍历所需的数字的形状（也就是画圆）
function renderDigit(x, y, num, cxt) {
  cxt.fillStyle = "rgb(0,102,153)";
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        cxt.beginPath();
        cxt.arc(
          x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          RADIUS,
          0,
          2 * Math.PI
        );
        cxt.closePath();
        cxt.fill();
      }
    }
  }
}
