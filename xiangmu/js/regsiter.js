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
$('.content_bottom_right_bottom  input').eq(1).click(function () {
    console.log(3452)
})
$('#password').blur(function () {
    if (checkReg.trim($('#password').val())) {
        if (checkReg.psweasy($('#password').val())) {
            $('.txtLoginPwdTip2').css('display', 'none')
            $('#password').css('border', '#ccc 1px solid')
        } else {
            $('.txtLoginPwdTip2').css('display', 'block')
        }
    } else {
        $('.txtLoginPwdTip2').css('display', 'block')
        $('#password').css('border', 'red 1px solid')
        console.log(123)
    }
})
$('#confirm_password').blur(function () {
    if (checkReg.trim($('#confirm_password').val())) {
        if ($('#password').val() == ($('#confirm_password').val())) {
            $('.txtLoginPwdTip3').css('display', 'none')
            $('#confirm_password').css('border', '#ccc 1px solid')
        } else {
            $('.txtLoginPwdTip3').css('display', 'block')
        }
    } else {
        $('.txtLoginPwdTip3').css('display', 'block')
        $('#confirm_password').css('border', 'red 1px solid')
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
            // console.log(str)
            if (str == 'no') {
               console.log('youle')
               $('.txtLoginPwdTip').css('display', 'block')
               $('.txtLoginPwdTip').text('该用户已被注册')
                isok = false;
            } else {
           
                isok = true;
            }
            console.log(isok)
            if (isok) {
              $.ajax({
                type: 'post',
                url: '../api/04reg.php',
                data: 'name=' + $('#account_number').val() + '&psw=' + $('#password').val(),
                success:function(str){
                    if (checkReg.trim($('#password').val())) {
                        if (checkReg.psweasy($('#password').val())) {
                            if ($('#password').val() == ($('#confirm_password').val())) {
                                location.href = '../html/denglu.html?name=' +  $('#account_number').val;
                                console.log(123)
                            }
                        }

                    }
                    
                }
              })
            }
        }
    })
})
var AuthCode = randomCode();

$('.SecurityCode').text(' 请输入字母数字    ' + AuthCode);
$('#Security').blur(function(){
  if(  $('#Security').val().toLowerCase() == AuthCode.toLowerCase()){
      $('.txtLoginPwdTip1').css('display','none');
  }else{
    $('.txtLoginPwdTip1').css('display','block');
  }
})
console.log(AuthCode)
$('.switchover').click(function(){
     AuthCode = randomCode();
    $('.SecurityCode').text(' 请输入字母数字    ' + AuthCode);
    console.log(123)
})