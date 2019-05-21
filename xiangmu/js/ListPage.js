$(function () {
function int(asd){
$.ajax({
    type:'post',
    url:'../api/ListPage.php',
    data: {'num': asd},
    success:function(str){
        var arr = JSON.parse(str);
        
       $t2= arr.total;
        // console.log($t2);
        var res = arr.data.map(function (item) {
            return `
            <dl data-id = '${item.lkx}' class = 'item_id1'>
            <dt>
                <div id="plist_link970154446"> <img src="../inages/${item.img}" alt=""></div>
                <div class="colorIndex">
                    <img src="../inages/${item.img1}" alt="">
                    <img src="../inages/${item.img2}" alt="">
                    <img src="../inages/${item.img3}" alt="">
                </div>
            </dt>
            <dd>
                <span>
                    <font>${item.store}</font>
                    <del>${item.price}</del>
                </span>
                <a href="#" class="sred">
                   ${item.asd}
                </a>
                <a href="" class="shop">
                  ${item.discount}
                </a>
                <strong>&nbsp;</strong>
            </dd>
          
        </dl>
            `
        }).join('');
       
        $('.chapList').html(res);
console.log(    $('.chapList'))
        page(asd);
      $.ajax({
        type:'post',
        url:'../api/ListPage1.php',
        success:function(str){
            arr = JSON.parse(str);
            console.log(arr.total);
        $('.item_id1').click(function(){
            var $b1 = $(this).eq(0).attr('data-id')
            var str = 'id=' + $b1;
            // console.log(str)
            location.href = 'http://localhost:1902/xiangmu/html/DetailPage.html?' + str;
        })

        }}
        )


        }
            
    })
    
}


int(1);
var $t2=null;



function page(aa){
    console.log($t2)
    $('.chapList1').paging({
        pageNo:aa,
        totalPage: Math.ceil($t2/ 10),
        totalSize: $t2,
        callback: function (num) {
            int(num);
        }
    })
    
    }

})

$('.topdiv_on_down').click(function(){


$.ajax({
    type:'post',
    url:'../api/ListPage2.php',
    success:function(str){
    }
})

})