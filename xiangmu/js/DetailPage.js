(function(){
var test = window.location.search;
   var test1 = test.charAt(test.length - 1)
//    console.log(test1)
   $.ajax({
    type: 'post',
    url: "../api/DetailPage.php",
    data: 'id=' + test1,
    success: function (str) {
        // console.log(str)
        var arr = JSON.parse(str);
        var res = arr.map(function (tiem) {
                return `
                <div class="main_left">
                <div class="this_page">
                        <span>首页</span>>
                        <span>所有产品</span>>
                        <span>所有产品</span>>
                        <span>所有产品</span>>
                    </div>
                    <div class="pic_ct">
                            <div class="thum_list">
                                <div class="jcarousel-skin-tango">
                                    <div class="jcarousel-container">
                                        <div class="jcarousel-prev"></div>
                                        <div class="jcarousel-next"></div>
                                        <div class="jcarousel-clip">
                                            <ul class="jcarousel">
                                                <li>
                                                    <img src="../inages/${tiem.img1}" alt="" class = "qiehuan">
                                                </li>
                                                <li>
                                                    <img src="../inages/${tiem.img2}" alt=""  class = "qiehuan">
                                                </li>
                                                
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                      <ul>
                        <div class="zoomPad">
                            <img  class = "my-foto" src="../inages/${tiem.img}" alt="">
                        </div>
                      </ul>
                     
                    </div>
        <div class="p_info">
            <h2>
                <em  class = "em">${tiem.asd}</em>
                <p>
                        很仙的防晒衣开衫外套                    </p>
            </h2>
            <div class="LookP_clearfix">
                <div class="price">
                    <span class="leftPrice">
                        <i class="renBox">¥</i> <b class = "store">${tiem.store}</b>
                    </span>
                <div class="rightPrice">
                        <span class="discountBox">3.3折</span>
                        <span class="marketBox">
                            ￥ <del class = "price">
                            ${tiem.price}
                            </del>
                        </span>
                </div>
                <div class="codeshow">
                    <img src="../inages/move01 (1).gif" alt="">
                    <div class="mb-p">
                        <p>手机便捷购买</p>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <p>
                        包邮
                    </p>
                <div class="cheap">
                    <i>参与优惠:</i>
                    <font class="PromoteTag">满减</font>
                    <font class="PromoteName">
                            繆斯之娇满99减10 满199减20
                    </font>
                </div>
                <div class="color_size_num">
                    <div class="color">
                        <ul class="ul_1">
                            <li class="tit">颜色</li>
                            <li class="licolork">
                                <p>
                                    <img src="../inages/970155780-CL02-00-C.jpg" alt=""  class = "qiehuan">
                                    <span class="s1">单黑色均码防晒衫</span>
                                </p>
                                <p>
                                    <img src="../inages/970155780-CL03-00-C.jpg" alt=""  class = "qiehuan">
                                    <span class="s1">单白色均码防晒衫</span>
                                </p>
                                <p>
                                    <img src="../inages/970155780-CL01-00-C.jpg" alt=""  class = "qiehuan">
                                    <span class="s1">单白色均码防晒衫</span>
                                    
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="size">
                            <ul>
                                <li class="tit">尺码</li>
                                <li class="txt">
                                    <span>均码</span>
                                </li>
                            </uli>
                        </div>
                    <div class="num">
                        <ul>
                            <li class="tit">数量</li>
                            <li class="txt">
                                <p>
                                    <b  class="sz">1</b>
                                    <i class="add"></i>
                                    <i class="remove"></i>
                                </p>
                                <span>始终有货</span>
                            </li>
                        </ul>
                    </div>
                    <div class="anniu">
                        <span id="collect">立即购买</span>
                        <span class="spanAddCart">加入购物车</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="lookback">
        <p>看了又看</p>
    </div>
   <div class="lb-carrier">
       <ul class="lb-con">
           <li><img src="../inages/970155753-CL01-01-S.jpg" alt="">
        <p>¥169</p>
    </li>
    <li><img src="../inages/970155753-CL01-01-S.jpg" alt="">
        <p>¥169</p>
    </li>
    <li><img src="../inages/970155753-CL01-01-S.jpg" alt="">
        <p>¥169</p>
    </li>
    <li><img src="../inages/970155753-CL01-01-S.jpg" alt="">
        <p>¥169</p>
    </li>  
     
       </ul>
   </div>
   <div class="togbtn">
       <div class="lb-prev"></div>
       <div class="lb-next"></div>
   </div>
   <div class="left">
       <img src="../inages/M5_14_161429.jpg" alt="">
       <img src="../inages/M7_3_142657.jpg" alt="">
       <img src="../inages/M5_14_161429.jpg" alt="">
       <img src="../inages/M7_3_142657.jpg" alt="">
       <img src="../inages/M5_14_161429.jpg" alt="">
       <img src="../inages/M7_3_142657.jpg" alt="">
       <img src="../inages/M5_14_161429.jpg" alt="">
       <img src="../inages/M7_3_142657.jpg" alt="">
   </div>
   <div class="right">
        <div class="goodsimp">
            <span>商品详情</span>
            <span>如何退款</span>
            <span>7天无理由退款</span>
        </div>
        <div class="product_show">
                <img src="../inages/e14fb286-18bb-4b56-85ce-1225ddf10aec_source.jpg" alt="">
                <img src="../inages/8b90bfc7-9823-49f1-84d3-6230f10c956c_source.jpg" alt="">
                <img src="../inages/e14fb286-18bb-4b56-85ce-1225ddf10aec_source.jpg" alt="">
            <img src="../inages/8b90bfc7-9823-49f1-84d3-6230f10c956c_source.jpg" alt="">
            <img src="../inages/e14fb286-18bb-4b56-85ce-1225ddf10aec_source.jpg" alt="">
            <img src="../inages/8b90bfc7-9823-49f1-84d3-6230f10c956c_source.jpg" alt="">
            <img src="../inages/e14fb286-18bb-4b56-85ce-1225ddf10aec_source.jpg" alt="">
            <img src="../inages/8b90bfc7-9823-49f1-84d3-6230f10c956c_source.jpg" alt="">
            <img src="../inages/e14fb286-18bb-4b56-85ce-1225ddf10aec_source.jpg" alt="">
            <img src="../inages/8b90bfc7-9823-49f1-84d3-6230f10c956c_source.jpg" alt="">
            <img src="../inages/e14fb286-18bb-4b56-85ce-1225ddf10aec_source.jpg" alt="">
            <img src="../inages/8b90bfc7-9823-49f1-84d3-6230f10c956c_source.jpg" alt="">
            
        </div>
    </div>
                
                
                `

        }).join('');
        $('.m_huibg0  .content').html(res);
        jQuery(function(){
   
            $(".my-foto").imagezoomsl({
              
               zoomrange: [3, 3]
            });
         });   
         $('.qiehuan').hover(function(){
             var bb = $(this).attr('src');
        $('.my-foto').attr('src',bb)
        })
        
        // console.log($('.qiehuan').attr('src'))
        var a1 = 1;
        $('.add').click(function(){
            a1++
            if(a1 <= 1){
                a1 =1;
            }
            $('.sz').html(a1)
            
        })
        $('.remove').click(function(){
            a1--
            if(a1 < 1){
                a1 =1;
            }
            $('.sz').html(a1)
            
        })
        $('.title').click(function(){
            // console.log(123)
            
            $('.ui-dialog').css('display','none')
        })
        $('.spanAddCart').click(function(){
            $('.ui-dialog').css('display','block')
            $('.p2').html('购物车共'+ a1 +'件')
            console.log(54345)
            var ll1 = $('.store').html();
            $.ajax({
               
                type: 'post',
                url: "../api/DetailPage1.php",
                data: {
        
                    'shuliang' : a1,
                    'jieshao' : $('.em').html(),
                    'tupian' : $('.my-foto').attr('src'),
                    'chicun'  : $.trim($('.txt').eq(0).text()),
                    'jiazhi' : ll1.substring(1),
                    success: function (){
                        console.log($('.store').html())
                        console.log(54345)
         
                    } 
                    
                }
                
        
            })
            $('.tiaozhuang').click(function(){
                location.href = 'http://localhost:1902/xiangmu/html/ShoppingCart.html?';
            })
            $('.guangbi').click(function(){
                console.log(123)
                $('.ui-dialog').css('display','none')
            })
        })
       
      


    }
   })
})();



(function(){
 
  
})()
// console.log($('.sz').html())