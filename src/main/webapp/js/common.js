/**
 * status -1: 特等奖；1:一等奖; 2:二等奖; 3:三等奖; 4:四等奖; 51:五等奖-1; 52：五等奖-2;  6:六等奖;
 * */
const test = [
  {
    "id": 202,
    "perNum": "3560",
    "perName": "孟玉芳",
    "status": 0
  },
  {
    "id": 202,
    "perNum": "3560",
    "perName": "孟玉芳",
    "status": 0
  },
  {
    "id": 202,
    "perNum": "3560",
    "perName": "孟玉芳",
    "status": 0
  },
  {
    "id": 605,
    "perNum": "8",
    "perName": "刘意",
    "status": 0
  },
  {
    "id": 621,
    "perNum": "4609",
    "perName": "杜文龙",
    "status": 0
  },
  {
    "id": 729,
    "perNum": "3934",
    "perName": "张雪",
    "status": 0
  },
  {
    "id": 202,
    "perNum": "3560",
    "perName": "孟玉芳",
    "status": 0
  },
  {
    "id": 605,
    "perNum": "8",
    "perName": "刘意",
    "status": 0
  },
  {
    "id": 621,
    "perNum": "4609",
    "perName": "杜文龙",
    "status": 0
  },
  {
    "id": 729,
    "perNum": "3934",
    "perName": "张雪",
    "status": 0
  }
]
const test_1 = [
  {
    "id": 366,
    "perNum": "5739",
    "perName": "韩子君",
    "status": 0
  },
  {
    "id": 729,
    "perNum": "3934",
    "perName": "张雪",
    "status": 0
  }
]
function query(status,callBack){
  $.ajax({
    type : "get",
    url : "http://localhost:8099/mvcDemo/start/getJiang/"+status,
    dataType : "json",
    success : function(data) {
      if(callBack){
        callBack(data);
      }
    }
  })
}

/**
 *
 * @param grade 1:一等奖;2:二等奖;3:三等奖;4:四等奖;51:五等奖-1;52：五等奖-2;6:六等奖;
 * @param num 人数
 * @param callBack
 */
function getPrize(grade, num, callBack) {
  $.ajax({
    type : "get",
    url : "http://localhost:8099/mvcDemo/start/get/"+grade+"/"+num,
    dataType : "json",
    success : function(data) {
      if(callBack){
        callBack(data);
      }
    }
  })
}

function reset(callBack) {
  loading.showLoading({
    type:1,
    tip:"加载中"
  })
  $.ajax({
    type : "get",
    url : "http://localhost:8099/mvcDemo/start/del",
    dataType : "json",
    success : function(data) {
      loading.hideLoading();
      if(callBack){
        callBack(data);
      }
    }
  })
}
function luckDraw(list,list_1,num) {
  $('.start').hide();
  $('.pos ul').append('<li class="li-'+num+'"></li>');
  let i = 0;
  var timer = setInterval(function () {
    var item = list[i]
    $('.li-'+num).html(item.perName+'('+item.perNum+')');
    i++;
    if(i>=list.length){
      i=0
    }
  },40);
  setTimeout(function () {
    clearInterval(timer);
    var item = list_1[num];
    $('.li-'+num).html('');
    $('.li-'+num).html(item.perName+'('+item.perNum+')');
    num++;
    if(num<list_1.length){
      luckDraw(list,list_1,num);
    }
  },2000)
}

const loading = {
  _loadItem:null,
  _anItem:null,
  _tipItem:null,
  _tipLabel:null,
  _showTip:true,
  _type:1,
  showLoading(config){
    if(this._loadItem){
      this._loadItem.remove();
      this._loadItem = null;
      this._anItem = null;
      this._tipItem = null;
      this._showTip = true;
      this._type = 1;
    }
    if(typeof config == "string"){
      this._tipLabel = config;
      this._type = 1;
    }else if(typeof config == "object"){
      this._tipLabel = typeof config.tip == "string" ? config.tip : "loading...";
      this._type = typeof config.type == "number" ? config.type : 1;
      this._showTip = typeof config.showTip == "boolean" ? config.showTip : true;
    }else{
      this._tipLabel = "loading...";
      this._type = 1;
    }
    this.createEle();
  },
  createEle(){
    this._loadItem = $(`<div class="load-view"></div>`);
    this._anItem = $(`<div class="load-an-view"></div>`);
    this._tipItem =  $(` <div class="load-tip">${this._tipLabel}</div>`);
    switch(this._type) {
      case 1:
        let load1 = $(`<div class="load-circle">
                    <div class="load-container load-container1">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                    <div class="load-container load-container2">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                    <div class="load-container load-container3">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                </div>`)
        load1.appendTo(this._anItem);
        break;
      case 2:
        let load2 = $(`<div class="fading-circle">
                    <div class="sk-circle1 sk-circle"></div>
                    <div class="sk-circle2 sk-circle"></div>
                    <div class="sk-circle3 sk-circle"></div>
                    <div class="sk-circle4 sk-circle"></div>
                    <div class="sk-circle5 sk-circle"></div>
                    <div class="sk-circle6 sk-circle"></div>
                    <div class="sk-circle7 sk-circle"></div> 
                    <div class="sk-circle8 sk-circle"></div>
                    <div class="sk-circle9 sk-circle"></div>
                    <div class="sk-circle10 sk-circle"></div>
                    <div class="sk-circle11 sk-circle"></div>
                    <div class="sk-circle12 sk-circle"></div>
                </div>`)
        load2.appendTo(this._anItem);
        break;
      case 3:
        let load3 = $(`<div class="three-bounce">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>`)
        load3.appendTo(this._anItem);
        break;
      case 4:
        let load4 = $(`<div class="chasing-dots">
                        <div class="dot1"></div>
                        <div class="dot2"></div>
                    </div>`)
        load4.appendTo(this._anItem);
        break;
      case 5:
        let load5 = $(`<div class="wave">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>`)
        load5.appendTo(this._anItem);
        break;
    }
    this.addEle();
  },
  addEle(){
    this._anItem.appendTo(this._loadItem);
    if(this._showTip){
      this._tipItem.appendTo(this._loadItem);
    }
    this._loadItem.appendTo($('body'));
  },
  hideLoading(){
    this._loadItem.remove();
    this.resetData();
  },
  resetData(){
    this._loadItem = null;
    this._anItem = null;
    this._tipItem = null;
    this._showTip = true;
    this._type = 1;
  }
}
