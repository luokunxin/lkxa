(function(){
    $.ajax({
        type:'post',
        url:'../api/ShoppingCart.php',
        success:function(str){
            var arr = JSON.parse(str);
            var res = arr.map(function (item) {
                return `
                <div class="shop "data-id = '${item.id}'>
                <div class="title">
                    <span class="shangjia">以下商品由 梦芭莎 发货</span>
                    <span class="yunfei">配送费10.00元，购满180.00元免配送费（还差
                        <font class="red">${180 - item.jiazhi*item.shuliang }</font>)
                    </span>
                </div>
                <div class="nr">
                    <dl>
                        <dt>
                                <input data-warecode="462017314-070S" data-kitorder="0" data-procode="undefined" class="chkalls" name="J_checkboxs" type="checkbox" checked="checked">
                        </dt>
                        <dd class="sp">
                            <span class="left">
                                    <img src="${item.tupian}" alt="">
                            </span>
                        <span class="right">
                            <span class="spmc">
                                   ${item.jieshao}                                     
                            </span>
                            <span class="zhiliao">
                                    品牌：梦芭莎　尺寸：S　颜色：粉色                                        
                            </span>
                        </span>

                        </dd>
                        <dd class="dj">
                            <p class = 'jiage11'>
                                <span class="price-icon">￥</span>${item.jiazhi}
                            </p>
                        </dd>
                        <dd class="sl clearfix">
                            <span class =  'jian'>
                                -
                            </span>
                            <input class="J_num num" data-warecode="462017314-070S" data-kitorder="0" type="text" value="${item.shuliang}" data-qty="1">
                        <span class = 'jia'>
                            +
                        </span>
                        </dd>
                        <dd class="jexj">
                                <span class="price-icon">￥</span>${item.jiazhi*item.shuliang}
                        </dd>
                        <dd class="cz">
                            <p class="xiugai">
                                    修改                                        
                            </p>
                           <p class="shanchu">
                               移出
                           </p> 
                        </dd>
                    </dl>
                </div>
                
                
            </div>
        </div>
        
                `
            }).join('');
            
            $('.buygoods1').html(res);
            $('.buygoods').css('display','none')
            console.log(    $.trim($('.dj p').text()).slice(1) )
            // console.log($('.buygoods1'))
            var cc =           $('.J_num').val() ;
            console.log(cc)
        
            function ten(id,name){
                $.ajax({
                    type:'post',
                    url:'../api/ShoppingCart5.php',
                    data:{
                        'id11' : id,
                        'name11' :name,
                    },
            
    // console,log(str)
                        
                    })
                    
            }
            function zs(){
            $.ajax({
                type:'post',
                url:'../api/ShoppingCart4.php',
            
                success:function(str){
                    var arr = JSON.parse(str);
                    console.log(arr[0]['SUM(shuliang)'] );
                    var cba = arr[0]['SUM(shuliang)']
                    $('.pics').html(cba + '件')
                    // var abc = arr[0]["SUM(shuliang*jiazhi)"];
                    // $('.howmuch').html(abc)
                    
                    
                }
                
            })
        }
         zs()
         function zj(){
            $.ajax({
                type:'post',
                url:'../api/ShoppingCart3.php',
            
                success:function(str){
                    var arr = JSON.parse(str);
                    // console.log(arr[0]["SUM(shuliang*jiazhi)"]);
                    var abc = arr[0]["SUM(shuliang*jiazhi)"];
                    $('.howmuch').html(abc)
                    
                    
                }
                
            })
        }
        zj()
            // $('.paym').css('display','none');
            $('.sl:eq(1) .jia').click(function(){
                var $ind = $(this).parents(".shop").index()
                console.log( $('.buygoods1 .shop').eq($ind).attr('data-id'))
                var idd = $('.buygoods1 .shop').eq($ind).attr('data-id') * 1;   
                var bb =      $('.sl:eq(1) .J_num').val()  *1 
                ten(idd,bb+1)
                zs()
                zj()
             
               $('.sl:eq(1) .J_num').val(bb*1+1)
                var bb1 =      $('.sl:eq(1) .J_num').val(bb*1+1);
                var bb2 =  $.trim($('.jiage11:eq(0)').text())
                var bb3 = bb2.substring(1) * 1;
                var bb4 =  (bb+1)* bb3;
                console.log(bb4,bb,bb3)
           
                $('.jexj:eq(1)').text(bb1 * 1)
                $('.jexj:eq(1)').html('￥'+bb4)
                $.ajax({
                    type:'post',
                    url:'../api/ShoppingCart3.php',
                
                    success:function(str){
                        var arr = JSON.parse(str);
                        console.log(arr.num_rows)
                        if(arr.length <= 0){
                            $('.paym').css('display','none');
                        }
                      
                    }
                    
                })
                
            })
            $('.sl:eq(1) .jian').click(function(){
                var $ind = $(this).parents(".shop").index()
                console.log( $('.buygoods1 .shop').eq($ind).attr('data-id'))
                var idd = $('.buygoods1 .shop').eq($ind).attr('data-id');
              
                // console.log( $('.jia'))
                var bb =      $('.sl:eq(1) .J_num').val() *1 
                ten(idd,bb)
                 var bb1 =      $('.sl:eq(1) .J_num').val(bb*1-1);
                 var bb2 =  $.trim($('.jiage11:eq(0)').text())
                 var bb3 = bb2.substring(1) * 1;
                 var bb4 = (bb-1) * bb3;
                 console.log(bb4,bb,bb3)
                 $('.jexj:eq(1)').text(bb1 * 1)
                 $('.jexj:eq(1)').html('￥'+bb4)
                 if(bb <=  1){
                    bb = 1;
                }
                $('.sl:eq(1) .J_num').val(bb*1-1);
                zs()
                zj()
                
             })
             $('.sl:eq(2) .jia').click(function(){
                var $ind = $(this).parents(".shop").index()
                console.log( $('.buygoods1 .shop').eq($ind).attr('data-id'))
                var idd = $('.buygoods1 .shop').eq($ind).attr('data-id');
                
                if(bb <=1){
                    bb =1;
                }
               var bb =      $('.sl:eq(2) .J_num').val()  *1 
               ten(idd,bb+1)
               $('.sl:eq(2) .J_num').val(bb*1+1)
                var bb1 =      $('.sl:eq(2) .J_num').val(bb*1+1);
                var bb2 =  $.trim($('.jiage11:eq(1)').text())
                var bb3 = bb2.substring(1) * 1;
                var bb4 =  (bb+1)* bb3;
                console.log(bb4,bb,bb3)
                $('.jexj:eq(2)').text(bb1 * 1)
                $('.jexj:eq(2)').html('￥'+bb4)
                zs()
                zj()
             })
             $('.sl:eq(2) .jian').click(function(){
                var $ind = $(this).parents(".shop").index()
                console.log( $('.buygoods1 .shop').eq($ind).attr('data-id'))
                var idd = $('.buygoods1 .shop').eq($ind).attr('data-id');
     
                var bb =      $('.sl:eq(2) .J_num').val() *1 
                ten(idd,bb-1)
                var bb1 =      $('.sl:eq(2) .J_num').val(bb*1-1);
                var bb2 =  $.trim($('.jiage11:eq(0)').text())
                var bb3 = bb2.substring(1) * 1;
                var bb4 = (bb-1) * bb3;
                console.log(bb4,bb,bb3)
                $('.jexj:eq(2)').text(bb1 * 1)
                $('.jexj:eq(2)').html('￥'+bb4)
                if(bb <=  1){
                   bb = 1;
               }
               $('.sl:eq(2) .J_num').val(bb*1-1);
               zs()
               zj()
              })
              $('.sl:eq(3) .jia').click(function(){
                var $ind = $(this).parents(".shop").index()
                console.log( $('.buygoods1 .shop').eq($ind).attr('data-id'))
                var idd = $('.buygoods1 .shop').eq($ind).attr('data-id');
           
                if(bb <=1){
                    bb =1;
                }
               var bb =      $('.sl:eq(3) .J_num').val()  *1 
               ten(idd,bb+1)
               $('.sl:eq(3) .J_num').val(bb*1+1)
                var bb1 =      $('.sl:eq(3) .J_num').val(bb*1+1);
                var bb2 =  $.trim($('.jiage11:eq(2)').text())
                var bb3 = bb2.substring(1) * 1;
                var bb4 =  (bb+1)* bb3;
                console.log(bb4,bb,bb3)
                $('.jexj:eq(4)').text(bb1 * 1)
                $('.jexj:eq(3)').html('￥'+ bb4)
                zs()
                zj()
          })
              $('.sl:eq(3) .jian').click(function(){
                var $ind = $(this).parents(".shop").index()
                console.log( $('.buygoods1 .shop').eq($ind).attr('data-id'))
                var idd = $('.buygoods1 .shop').eq($ind).attr('data-id');
       
                var bb =      $('.sl:eq(3) .J_num').val() *1 
                ten(idd,bb-1)
                var bb1 =      $('.sl:eq(3) .J_num').val(bb*1-1);
                var bb2 =  $.trim($('.jiage11:eq(2)').text())
                var bb3 = bb2.substring(1) * 1;
                var bb4 = (bb-1) * bb3;
                console.log(bb4,bb,bb3)
                $('.jexj:eq(4)').text(bb1 * 1)
                $('.jexj:eq(3)').html('￥'+bb4)
                if(bb <=  1){
                   bb = 1;
               }
               $('.sl:eq(3) .J_num').val(bb*1-1);
               zs()
               zj()
              })
              function asd(jieshao,jiage){
                $.ajax({
                    type:'post',
                    url:'../api/ShoppingCart1.php',
                    data:{
                        jieshsao1:jieshao,
                        jiazhi: jiage,
                    },
                })
         
                  
}
            //   console.log($.trim($('.jiage11:eq(1)').text()).splice(1)
       
            // console.log($.trim($('.jiage11:eq(2)').text()))
            $('.nr').on('click','.shanchu',function(){
                var $ind = $(this).parents(".shop").index()
                // console.log(       $(this).parents(".shop").index())
             
                console.log( $('.buygoods1 .shop').eq($ind).attr('data-id'))
                var id =$('.buygoods1 .shop').eq($ind).attr('data-id');
                $.ajax({
                    type:'post',
                    url:'../api/ShoppingCart2.php',
                    data:{
                        id1 : id,
                    },
                    success:function(str){
// console,log(str)
                        $('.howmuch').html(str)
                    }
                    
                })
                $('.buygoods1 .shop').eq($ind).remove()
                zs()
                zj()
                $.ajax({
                    type:'post',
                    url:'../api/ShoppingCart6.php',
         
                    success:function(str){
        // console,log(str)
                       console.log(str)
                       if(str*1 < 1){
                           $('.paym').css('display','none')
                           $('.buygoods').css('display','block')
                       }
                    }
                    
                })
        })
        $.ajax({
            type:'post',
            url:'../api/ShoppingCart6.php',
 
            success:function(str){
// console,log(str)
               console.log(str)
               if(str*1 < 1){
                   $('.paym').css('display','none')
                   $('.buygoods').css('display','block')
               }
            }
            
        })
            // $('.howmuch').css('')
            console.log($('.jexj').text().slice(38))
            $('.jexj').text().slice(38)
    
        }
    })
})()