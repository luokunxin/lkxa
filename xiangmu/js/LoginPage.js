
$('.content_bottom_right_top  span').eq(1).click(function(){
$('.content_bottom_right_bottom1').css('display','block');
$('.content_bottom_right_bottom').css('display','none');
$('.content_bottom_right_top  span:eq(1) a').css('border-bottom','2px solid #000');
$('.content_bottom_right_top  span:eq(0) a').css('border-bottom','2px solid #fff');
$('.content_bottom_right_top  span:eq(1) a').css('color','#000');
$('.content_bottom_right_top  span:eq(0) a').css('color','#ccc');
$('.content_bottom_right_bottom').css('display','none');
});
$('.content_bottom_right_top  span').eq(0).click(function(){
$('.content_bottom_right_bottom').css('display','block' )
$('.content_bottom_right_bottom1').css('display','none');
$('.content_bottom_right_top  span:eq(0) a').css('border-bottom','2px solid #000');
$('.content_bottom_right_top  span:eq(1) a').css('border-bottom','2px solid #fff');
$('.content_bottom_right_top  span:eq(1) a').css('color','2px solid #ccc');
$('.content_bottom_right_top  span:eq(0) a').css('color','2px solid #000');
})
$('.content_bottom_right_bottom1').css('display','none');
$('.content_bottom_right_bottom').css('display','block');
$('.content_bottom_right_top  span:eq(0) a').css('display','block');
$('.content_bottom_right_top  span:eq(1) a').css('display','block');
$('.content_bottom_right_bottom2').css('display','none');
$('.content_bottom_right_top1 ').css('display','none');
$('.content_bottom_right_top1  span').eq(2).click(function(){
$('.content_bottom_right_top1 ').css('display','none');$('.content_bottom_right_top  span:eq(0) a').css('display','block');
$('.content_bottom_right_top  span:eq(1) a').css('display','block   ');
$('.content_bottom_right_bottom2').css('display','none');
$('.content_bottom_right_bottom1').css('display','block');
$('.content_bottom_right_top  span:eq(1) a').css('border-bottom','2px solid #000');
$('.content_bottom_right_top  span:eq(0) a').css('border-bottom','2px solid #fff');
$('.content_bottom_right_top  span:eq(1) a').css('color','#000');
$('.content_bottom_right_top  span:eq(0) a').css('color','#ccc');
$('.content_bottom_right_top').css('position','relative')
});
$('.content_bottom_right_top1  span').eq(0).click(function(){
$('.content_bottom_right_top1 ').css('display','none');
$('.content_bottom_right_top  span:eq(0) a').css('display','block');
$('.content_bottom_right_top  span:eq(1) a').css('display','block   ');
$('.content_bottom_right_bottom2').css('display','none');
$('.content_bottom_right_bottom1').css('display','block');
$('.content_bottom_right_top  span:eq(0) a').css('border-bottom','2px solid #000');
$('.content_bottom_right_top  span:eq(1) a').css('border-bottom','2px solid #fff');
$('.content_bottom_right_top  span:eq(0) a').css('color','#000');
$('.content_bottom_right_top  span:eq(1) a').css('color','#ccc');
$('.content_bottom_right_bottom').css('display','block' )
$('.content_bottom_right_bottom1').css('display','none');
$('.content_bottom_right_top').css('position','relative')
});
$('.login_scan_click').click(function(){
$('.content_bottom_right_bottom').css('display','none');
$('.content_bottom_right_top  span:eq(0) a').css('display','none');
$('.content_bottom_right_top  span:eq(1) a').css('display','none');
$('.content_bottom_right_top1').css('display','block');
$('.content_bottom_right_bottom2').css('display','block');
$('.content_bottom_right_top').css('position','absolute')
});
$('.login_scan_click1').click(function(){
$('.content_bottom_right_bottom').css('display','none');
$('.content_bottom_right_top  span:eq(0) a').css('display','none');
$('.content_bottom_right_top  span:eq(1) a').css('display','none');
$('.content_bottom_right_top1').css('display','block');
$('.content_bottom_right_bottom2').css('display','block');
$('.content_bottom_right_top').css('position','absolute');
$('.content_bottom_right_bottom1').css('display','none');
$('.content_bottom_right_bottom').css('display','none');
})

$('#account_number').blur(function () {
    if (checkReg.trim($('#account_number').val())) {
        if (checkReg.tel($('#account_number').val())) {
            $('.txtLoginPwdTip').css('display', 'none')
            $('#account_number').css('border', '#ccc 1px solid')
        } else {
            $('.txtLoginPwdTip').css('display', 'block')
            $('.txtLoginPwdTip').text('请输入邮箱或手机号!')
        }
    } else {
        $('.txtLoginPwdTip').css('display', 'block')
        $('#account_number').css('border', 'red 1px solid')

    }
})
$('#password').blur(function () {
    if (checkReg.trim($('#password').val())) {
        if (checkReg.psweasy($('#password').val())) {
            $('.txtLoginPwdTip1').css('display', 'none')
            $('#password').css('border', '#ccc 1px solid')
        } else {
 
        }
    } else {
        $('.txtLoginPwdTip1').css('display', 'block')
        $('#password').css('border', 'red 1px solid')
        console.log(123)
    }
})

$('#Agree_button').click(function () {
    
    var isok = false;
    $.ajax({
        type: 'post',
        url: '../api/regsiter.php',
        data: 'name=' + $('#account_number').val(),
        success: function (str) {
            if(str == 'no'){
                $('.txtLoginPwdTip').hide()
                isok = true;
            }else  if(str == 'yes'){
                $('.txtLoginPwdTip').css('display', 'block')
                $('.txtLoginPwdTip').text('不存在该用户!')
            }
    
            if(isok){
                $.ajax({
                    type: 'post',
                    url: '../api/04reg.php',
                    data: 'name=' + $('#account_number').val() + '&psw=' + $('#password').val(),
                    success:function(str){
                        if(str == 'yes'){
                            location.href = '../mbs.html?name=' +  $('#account_number').val();
                        }else{
                            $('.txtLoginPwdTip').css('display', 'block');
                         
                            $('.txtLoginPwdTip1').css('display', 'block');
                            $('.txtLoginPwdTip1').text('密码错误!')
                        }
                    }
                })

            }

        }
    })
})
var AuthCode = randomCode();
console.log(AuthCode)
$('.SecurityCode').text(' 请输入字母数字    ' + AuthCode);
$('.switchover').click(function(){
    var AuthCode = randomCode();
    $('.SecurityCode').text(' 请输入字母数字    ' + AuthCode);
    console.log(123)
})
