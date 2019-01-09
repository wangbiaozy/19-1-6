var imgArr = [
    "images/code.jpg",
    "images/bean.png",
    "images/bg.png",
    "images/bg-bottom.png",
    "images/bg-rule.png",
    "images/btn-add.png",
    "images/btn-cancel.png",
    "images/btn-confirm.png",
    "images/btn-given.png",
    "images/btn-help.png",
    "images/btn-make.png",
    "images/btn-modify.png",
    "images/btn-ok.png",
    "images/btn-rule.png",
    "images/btn-send.png",
    "images/btn-submit.png",
    "images/btn-to-make.png",
    "images/dlg.png",
    "images/game-zhou.png",
    "images/gift-bag1.png",
    "images/gift-bag1-on.png",
    "images/gift-bag2.png",
    "images/gift-bag2-on.png",
    "images/gift-zhou.png",
    "images/icon-gy.png",
    "images/icon-hd.png",
    "images/icon-hm.png",
    "images/icon-hs.png",
    "images/icon-ld.png",
    "images/icon-lz.png",
    "images/icon-user.png",
    "images/icon-yr.png",
    "images/icon-zhou.png",
    "images/lamp-b.png",
    "images/lamp-s.png",
    "images/line.png",
    "images/sc-gy.png",
    "images/sc-gy-on.png",
    "images/sc-hd.png",
    "images/sc-hd-on.png",
    "images/sc-hm.png",
    "images/sc-hm-on.png",
    "images/sc-hs.png",
    "images/sc-hs-on.png",
    "images/sc-hz.png",
    "images/sc-hz-on.png",
    "images/sc-ld.png",
    "images/sc-ld-on.png",
    "images/sc-lz.png",
    "images/sc-lz-on.png",
    "images/score-600.png",
    "images/score-1000.png",
    "images/score-3000.png",
    "images/sc-yr.png",
    "images/sc-yr-on.png",
    "images/share.png",
    "images/title.png",
    "images/title-fri.png",
    "images/t-record.png",
    "images/zhou.png"
];
var count = 0;
var len = imgArr.length;
function loadImg(oimg,callback){  
    var img = new Image();
    img.src = oimg;
    img.onload = function(){
        callback();
    }
}
function imgLoaded(){
    count = count+1;
    if(count < imgArr.length){
        var pro = parseInt(count / len * 100) + '%';
        $(".page-loading .progress").text(pro);
        loadImg(imgArr[count],imgLoaded);
    } else {
        $(".page-loading").hide();
        $(".page-index").show();
    }
}
$(function(){
    loadImg(imgArr[0],imgLoaded); 
})