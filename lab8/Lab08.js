
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */
let arrow_left = document.getElementsByClassName("arrow_left")[0];
let arrow_right = document.getElementsByClassName("arrow_right")[0];
let wrap = document.getElementsByClassName("wrap")[0];
let btns = document.getElementsByTagName("span");
let pic_index = 1;                                                  //当前的图片序号。
let left = -600;                                                    //wrap的left属性值，改变它可以切换当前显示的图片。

let loop;
let loop_flag;
let container = document.getElementsByClassName("container")[0];

let title = document.getElementsByTagName("h3")[0];
let table = document.getElementsByTagName("table")[0];
let bd = document.getElementById("bd");
/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/


arrow_left.addEventListener("click", prev);                         //对左箭头进行事件监听。
function prev() {                                                   //切换到上一张图片的function。
    let btn1 = btns[pic_index - 1];
    btn1.setAttribute("class", "");             //通过设置class的方式改变右下角的数值颜色。
    if (pic_index === 1) {
        pic_index = 5;
        left = -3000;
    } else {
        pic_index--;
        left += 600;
    }
    wrap.style.left = left + "px";                                  //改变left。
    let btn2 = btns[pic_index - 1];
    btn2.setAttribute("class", "on");
}

arrow_right.addEventListener("click", next);                        //对右箭头进行事件监听。
function next() {
    let btn1 = btns[pic_index - 1];
    btn1.setAttribute("class", "");
    if (pic_index === 5) {
        pic_index = 1;
        left = -600;
    } else {
        pic_index++;
        left -= 600;
    }
    wrap.style.left = left + "px";
    let btn2 = btns[pic_index - 1];
    btn2.setAttribute("class", "on");
}


/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/


window.addEventListener("load",function () {                    //页面刚加载完成时开始自动播放。
    loop_flag = true;
    loop = setInterval(next, 2000);
})

container.addEventListener("mouseover",function () {                         //鼠标移入轮播区域内停止自动播放。
    if (loop_flag === true) {
        loop_flag = false;
        clearInterval(loop);
    }
})
container.addEventListener("mouseout",function () {                          //鼠标移出轮播区域开始自动播放。
    if (loop_flag === false) {                                                    //避免两次setInterval同时进行。
        loop_flag = true;
        loop = setInterval(next, 2000);
    }
})


/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for (let i = 1; i <= btns.length; i++) {                                     //对每一个数值元素进行事件监听。
    btns[i - 1].addEventListener("click", function () {
        let times = Math.abs(pic_index - i);
        if (i <= pic_index) {                                                  //判断向前或向后进行跳转。
            for (let j = 0; j < times; j++) {
                prev();
            }
        } else {
            for (let k = 0; k < times; k++) {
                next();
            }
        }
    });
}


/*********************************************end*************************************/



/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/

$(function () {
    $("td")
        .css({width: "200px"})                                          //设置表格中每一个td的宽度为总宽度的1/3。
        .click(function () {                                            //单击td触发事件。
            let td = $(this);
            let input = $("<input type='text' value='" + td.text() + "'/>");
            td.html(input);                                             //获得td其中的值，在其之上新创建一个input，把值放入其中。
            input.focus();                                              //光标自动定位到开头。
            input
                .width(td.width())                                      //设置input的宽高与td的相同。
                .height(td.height())
                .css({border: "0", margin: "0", padding: "0 0 0 1px"}); //设置input的左内边距为1px，方便观察光标。
            input.click(function () {                                   //避免多次触发click事件。
                return false;
            });
            input.blur(function () {                                    //编辑完成后，将input的值赋给td。
                td.html(input.val());
            });
        });
});

                                                                        //以下部分为对css进行的修改。
title.style.textAlign = "center";
title.style.margin = "50px 0 0 0";

table.style.width = "600px";
table.style.height = "150px";
table.style.margin = "40px auto 50px auto";
table.style.borderRadius = "7px";
table.style.boxShadow= "0 0 5px grey";

container.style.margin = "50px auto 0 auto";

bd.style.width = "750px";
bd.style.margin = "30px auto 30px auto";
bd.style.padding = "1px 0 1px 0";
bd.style.backgroundColor = "rgba(125, 122, 228, 0.21)";





/*********************************************end*************************************/