$(function () {

    //下拉菜单
    mySelect1();
    mySelect2();
    mySelect3();
    mySelect4();
    mySelect5();
    mySelect6();

    $(window).click(function (e) {
        windowClick();
    });


    //单选按钮
    applyRadio();

    // 上传文件
    upShow1();
    upShow2();
});

function windowClick() {
    $(".wgcselectUlOver>ul").removeClass("wgcDisplay");
    $(".wgcselectJianTou").removeClass("wgcImgRotate");
    $(".wgcselectUlOver").addClass("wgcSelectOverNo");

}

function mySelect1() {
    $(".wgcselectBox1").click(function (e) {


        // for(let i = 0; i<$(".wgcselectBox").length;i++){
        //     console.log(i);
        //     if($(".wgcselectBox").eq(i).attr("class")==$(this).attr("class")){
        //         console.log(1);
        //         $(".wgcselectBox").splice(i,1)
        //     }
        // }


        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");


        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {

            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });

}

function mySelect2() {
    $(".wgcselectBox2").click(function (e) {
        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");
        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });
    windowClick()

}

function mySelect3() {
    $(".wgcselectBox3").click(function (e) {
        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");
        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });
    windowClick()

}

function mySelect4() {
    $(".wgcselectBox4").click(function (e) {
        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");
        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });
    windowClick()

}

function mySelect5() {
    $(".wgcselectBox5").click(function (e) {
        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");
        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });

    windowClick()

}

function mySelect6() {
    $(".wgcselectBox6").click(function (e) {
        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");
        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });
    windowClick()

}

function applyRadio() {
    $(".apply_list_radio>p").click(function () {
        if ($(this).attr("sel") == 1) {

            console.log("选择1");
        } else {
            console.log("选择2");

        }
        $(this).find(".dot").addClass("dot_in");
        $(this).siblings().find(".dot").removeClass("dot_in");

    });
}

function upShow1() {
    $(".upFile_btn1").change(function () {
        $(this).siblings(".upFile_text").text($(this).val());

    });
}

function upShow2() {
    $(".upFile_btn2").change(function () {
        $(this).siblings(".upFile_text").text($(this).val());

    });
}

function stopBubble(e) {//阻止事件冒泡 只触发当前点击的函数
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}