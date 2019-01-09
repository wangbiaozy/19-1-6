/*
* @Author: Administrator
* @Date:   2018-12-20 16:21:41
* @Last Modified by:   Administrator
* @Last Modified time: 2018-12-29 14:44:07
*/
var _dlgCommonTips = {
    // type:icon-gy -hd -hm -hs -hz -ld -lz -yr -zhou
    // 获取食材
    getSc:function(type){
        var html = '';
        var obj = getScInfo(type);
        if(type == 'zhou'){
            html += '<div class="inner-get-sc zhou-tips"><p>送您一碗美味的腊八粥</p><br> <p class="key">美味值+600</p><div class="sc-con icon-zhou"></div> <p>继续为ta增加美味值</p> <p>可以解锁最高8.8GB大奖哦~</p> <div class="btn-con"> <a href="javascript:;" class="btn btn-go"></a> </div><div class="tips"><p>美味值达到1000时，可抽取最高<span class="key">1GB</span></p><p>美味值达到3000时，可抽取最高<span class="key">8.8GB</span></p></div></div>';
        } else {
            html += '<div class="inner-get-sc"><p>恭喜您获得<span class="key">'+obj.name+'</span></p> <p class="key">美味值+'+obj.score+'</p><div class="sc-con icon-'+type+'"></div><br> <p>继续积攒食材，提升美味值吧！</p> <p>集齐8种食材美味值+1000哦~</p> <div class="btn-con"> <a href="javascript:;" class="btn btn-go"></a> </div></div>';
        }
        return html;
    },
    // 查看好友助力
    lookHelpRecord:function(type,friName){
        var obj = getScInfo(type);
        return '<div class="inner-help-record"> <p>您为好友'+friName+'助力</p> <p>'+obj.name+'食材一份</p> <p class="key">美味值+'+obj.score+' </p><br><p>快来一起制作腊八粥</p><p>赢取8.8GB流量大奖吧！</p> <div class="sc-con icon-yr"></div> <div class="btn-con"> <a href="javascript:;" class="btn btn-join"></a> </div> </div>';
    },
    // 好友成功增加美味值
    addHelpSuccess:function(type,friName){
        var obj = getScInfo(type);
        return '<div class="inner-help-record"> <p>您的好友'+friName+'</p> <p>成功为您增加了'+obj.name+'</p> <p>食材和'+obj.score+'点美味值！ </p> <div class="sc-con icon-'+type+'"></div> <div class="btn-con"> <a href="javascript:;" class="btn btn-ok"></a> </div> </div>';
    },
    // 美味值不足
    noEnough:function(score){
        var html = '';
        html += '<div class="inner-no-enough"><p>美味值达到'+score+'点</p><p>才能解锁这个礼盒</p><br><p>快去邀请好友</p><p>帮忙积攒更多美味值吧！</p><div class="btn-con"> <a href="javascript:;" class="btn btn-send"></a> </div> </div>'
        return html;
    },
    noEnough_1:function(score){
        var html = '';
        html += '<div class="inner-no-enough"><p>美味值达到'+score+'点</p><p>才能解锁这个礼盒</p><p>最高可抽<span>8.8GB</span>流量</p><br></brt><p>快去邀请好友</p><p>帮忙积攒更多美味值吧！</p><div class="btn-con"> <a href="javascript:;" class="btn btn-send"></a> </div> </div>'
        return html;
    },
    // 机会用尽
    noChance:function(){
        var html = '';
        html += '<div class="inner-no-chance"><p>您的3次抽取食材机会已用尽</p><p>邀请好友帮忙，可解锁更多食材</p><div class="btn-con"> <a href="javascript:;" class="btn btn-send"></a> </div> <div class="tips"><p>美味值达到1000时，可抽取最高<span class="key">1GB</span></p><p>美味值达到3000时，可抽取最高<span class="key">8.8GB</span></p></div></div>'
        return html;
    },
    // 食材集齐
    scJq:function(){
        var html = '';
        html += '<div class="inner-sc-jq"><p>恭喜您</p><p>集齐了8种食材</p><br><p class="key">美味值+1000</p><br><p>离大奖又进了一步！</p><div class="btn-con"> <a href="javascript:;" class="btn btn-ok"></a> </div> </div>';
        return html;
    },
    // 本网中流量
    flow:function(obj){
        var html = '';
        if(obj.name == '1000'){
            html += '<div class="inner-flow"><a href="javascript:;" class="btn-close"></a><p>恭喜您<br>成功开启暖心礼盒！</p><p>手机号：<span class="key">'+tel+'</span></p><p>获得<span class="key">'+obj.val+'</span>全国流量</p><br><div class="tips"><p>流量将于15日内到账，有效期至本月月末</p><p>（流量到账后，立即生效）</p><p>集满3000点美味值可以开启更大的礼物盒哦!</p></div><div class="banner"><a href=""><img src=""></a></div><div class="btn-con"> <a href="javascript:;" class="btn btn-get"></a> </div> </div>';
        } else {
            html += '<div class="inner-flow"><a href="javascript:;" class="btn-close"></a><p>恭喜您<br>成功开启腊八大礼！</p><p>手机号：<span class="key">'+tel+'</span></p><p>获得<span class="key">'+obj.val+'</span>全国流量</p><br><div class="tips"><p>流量将于15日内到账，有效期至本月月末</p><p>（流量到账后，立即生效）</p></div><div class="banner"><a href=""><img src=""></a></div><div class="btn-con"> <a href="javascript:;" class="btn btn-get"></a> </div> </div>';
        }
        return html;
    },
    // 异网中流量转赠
    given:function(obj){
        var html = '';
        if(obj.name == '1000'){
            html += '<div class="inner-given"> <p>恭喜您<br>成功开启暖心礼盒！</p>';
        } else {
            html += '<div class="inner-given"> <p>恭喜您<br>成功开启腊八大礼！</p>';
        }
        html += '<a href="javascript:;" class="btn-close"></a> <p>手机号：<span class="key">'+tel+'</span></p> <p>获得<span class="key">'+obj.val+'</span>全国流量</p><br><div class="tips"><p>您可以转赠到北京移动号码内</p> <p>（流量仅可在活动期间进行转赠）</p></div> <div class="banner"><a href=""><img src=""></a></div><div class="btn-con"> <a href="javascript:;" class="btn btn-cancel"></a> <a href="javascript:;" class="btn btn-given"></a> </div> </div>';
        return html;
    },
    // 异网转赠手机号
    form:function(){
        var html = '';
        html += '<div class="inner-form"> <p>请输入好友北京移动手机号码</p> <div class="ipt-con"> <label>手机号码</label> <input type="text" name="" class="ipt-tel"> </div> <div class="btn-con"> <a href="javascript:;" class="btn btn-tel"></a> </div> </div>';
        return html;
    },
    confirm:function(obj){
        var html = '';
        html += '<div class="inner-confirm"> <p>您是否将</p> <p><span class="key">'+obj.val+'</span>全国流量</p><p>转赠到手机号</p> <p>'+obj.friTel+'</p> <p>账号中</p> <br><p class="tips">点击确认后，信息将不可更改</p> <div class="btn-con"> <a href="javascript:;" class="btn btn-modify"></a> <a href="javascript:;" class="btn btn-confirm"></a> </div> </div>';
        return html;
    },
    // 转赠成功
    sendFlowSuccess:function(obj){
        var html = '';
        html += '<div class="inner-send-flow"><p>您已将</p><p><span class="key">'+obj.val+'<span>全国流量</p><p>转赠到手机号</p><p>'+obj.friTel+'账户中</p><br><p>流量将于15日内到账</p><p>流量有效期至本月月末</p><p class="tips">（流量到账后，立即生效）</p><br><div class="btn-con"> <a href="javascript:;" class="btn btn-ok"></a> </div></div>';
        return html;
    },
};
// 进度条抽奖列表信息
var prizeInfoList = [{
	name:'1000',
    tips:'1000点',
	val:['200MB','500MB','1GB']
},{
    name:'3000',
	tips:'3000点',
	val:['500MB','1GB','5GB','8.8GB']
}];
// 食材信息列表
var scInfoList = [{
    name:'薏仁',
    cls:'yr',	//渲染到页面时的类名
    addTimes:0,	//美味值机会
    score:400	//分值
},{
    name:'红豆',
    cls:'hd',
    addTimes:0,
    score:50
},{
    name:'桂圆',
    cls:'gy',
    addTimes:0,
    score:100
},{
    name:'黑米',
    cls:'hm',
    addTimes:0,
    score:50
},{
    name:'红枣',
    cls:'hz',
    addTimes:0,
    score:150
},{
    name:'莲子',
    cls:'lz',
    addTimes:0,
    score:150
},{
    name:'绿豆',
    cls:'ld',
    addTimes:0,
    score:200
},{
    name:'花生',
    cls:'hs',
    addTimes:0,
    score:100
}];
// 好友助力列表
var friHelpList = [];
var tempFriHelpList = {	//测试用，friHelpList每项的格式
	userName:'abc',       //助力好友名称
    scName:'绿豆',       //助力食材种类
    cls:'ld',
    score:200,          //分值
    time:'12.20 17:22' //助力时间
};
// 返回随机食材的类型
function randomScType(){
	var index = Math.floor(Math.random() * scInfoList.length);
    var type = scInfoList[index]['cls'];
    scInfoList[index]['addTimes']++;	//scInfoList提交后台
    return {
    	type:type,
    	index:index
    };
}
// 返回不同type对应的食材信息
// type:icon-gy -hd -hm -hs -hz -ld -lz -yr -zhou
function getScInfo(type){
    var obj = {};
    switch(type){
        case 'gy':
            obj.name = '桂圆';
            obj.score = 100;
            break;
        case 'hd':
            obj.name = '红豆';
            obj.score = 50;
            break;
        case 'hm':
            obj.name = '黑米';
            obj.score = 50;
            break;
        case 'hs':
            obj.name = '花生';
            obj.score = 100;
            break;
        case 'hz':
            obj.name = '红枣';
            obj.score = 150;
            break;
        case 'ld':
            obj.name = '绿豆';
            obj.score = 200;
            break;
        case 'lz':
            obj.name = '莲子';
            obj.score = 150;
            break;
        case 'yr':
            obj.name = '薏仁';
            obj.score = 200;
            break;
        case 'zhou':
            obj.name = '一碗粥';
            obj.score = 600;
            break;
    }
    return obj;
}
// 渲染通用弹窗
function renderDlgCommon(html){
    _dlgCommonCon.html(html);
    _dlgCommon.show();
}
// 返回当前时间
function getCurrentTime(){
	var date = new Date();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	return month+'.'+day+' '+hour+':'+min;
}
$(function(){
	$(".page").on("click",".btn-rule",function(){
        _dlgRule.show();
    });
    $(".dlg").on("click",".btn-ok",function(){
        $(this).closest(".dlg").hide();
    });
})