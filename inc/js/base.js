// import $ from './jquery-3.3.1.min.js'

$(function() {
  
  // 左側MENU彈出
  $('.left-menu-btn').click(function() {
    $('.menu-layout').fadeIn(200)
    $('.left-menu-content').addClass('show')
  });
  $('#close_left_menu,.menu-layout').click(function() {
    $('.menu-layout').fadeOut(200)
    $('.left-menu-content').removeClass('show')
  });


  // 滾動縮放Header
  // var oldst = 0
  // $(window).scroll(function() {
  //   var st = $(document).scrollTop()
  //   if (st > 0) {
  //     // scrolldown
  //     $('.header-logo').removeClass('sm')
  //     $('.wrapper-size').addClass('shrink')
  //     $('.tb_sin1').hide()
  //     $('.sticky').addClass('scrollUp');
  //   } else {
  //     // scrollup
  //     $('.header-logo').addClass('sm')
  //     $('.wrapper-size').removeClass('shrink')
  //     $('.tb_sin1').show()
  //     $('.sticky').removeClass('scrollUp');
  //   }
  //   oldst = st
  // })

  $('.openNclose').click(function(){
    if(!$('.wrapper-size').hasClass('shrink')){
      $('.header-logo').removeClass('sm')
      $('.wrapper-size').addClass('shrink')
      $('.tb_sin1').hide()
      $('.sticky').addClass('scrollUp');
    }else{
      $('.header-logo').addClass('sm')
      $('.wrapper-size').removeClass('shrink')
      $('.tb_sin1').show()
      $('.sticky').removeClass('scrollUp');
    }
  })

  // 填寫時增加左側ROW的FOCUS
  $('.radio_box').click(function() {
    $(this)
      .parents('td')
      .next()
      .find('.focus')
      .focus()
  })
  
  $('.focus').focus(function() {
    $(this)
      .parents('tr')
      .addClass('focus-row');
    
    $(this)
      .parents('tr')
      .find('.td_note')
      .addClass('extend');

    $(this).blur(function() {
      $(this)
        .parents('tr')
        .removeClass('focus-row');
      $(this)
        .parents('tr')
        .find('.td_note')
        .removeClass('extend');
    })
  })

  $('.view').click(function(e){
    e.stopPropagation();
    $(this).find('.td_note').toggleClass('extend');
  });
  $(document).on('click touchstart', function (e) {
    if (!$(e.target).closest('.view').length) {
      $('.view .td_note').removeClass('extend');
    }
  });


  // 清除輸入值
  $('.ui-search').focus(function(){
      $('.clear').show();
  })
  $('.clear').click(function(){
    $('.ui-search').val('');
    $('.clear').hide();
  })

  // 全選所有checkbox

  $('input[name=checkboxAllSelect]').change(function() {
    $('input[name=checkboxSingle]').prop('checked', $(this).prop('checked'));
    $(this).next('.checkbox-box').removeClass('noCheckAll');
  })

  $('input[name=checkboxSingle]').change(function() {

    let total=$(this).parents().parents().parents().siblings('tr').length+1;
    let chkdLength = $('input[name=checkboxSingle]:checked').length;
    if (chkdLength == total) {
    $('input[name=checkboxAllSelect]').prop('checked',true);
    // $(this).next('.checkbox-box').removeClass('noCheckAll');
    // $('input[name=checkboxAll]').next('.checkbox-box').removeClass('noCheckAll');
    }else{
    $('input[name=checkboxAllSelect]').prop('checked',false);
    // $('input[name=checkboxAll]').next('.checkbox-box').removeClass('noCheckAll');

    }
  })



  // 全選勾
  $('#checkAllOk').click(function() {
    var btn = $(this)
    var status = $('.ok')
    checkAll(btn, status)
  })
  // 全選X
  $('#checkAllNo').click(function() {
    var btn = $(this)
    var status = $('.no')
    checkAll(btn, status)
  })
  // 全選function
  function checkAll(btn, status) {
    $(status)
      .prev('input[type=radio]')
      .prop('checked', true)
  }

  
  

  // 按下紅色鈕刪除整列
  $('.btn_org').click(function() {
    $(this)
      .parents('tr')
      .hide(500)
  })

  // 頁面載入動畫
  $(window).on('load', function() {
    $('body').addClass('fixed')
    $('.mask-layout').show(0, function() {
      var loading = setTimeout(function() {
        $('.mask-layout').fadeOut(400)
        $('body').removeClass('fixed')
      }, 3000)
    })
  })

  // 切換總覽載入動畫
  $('#overview').click(function(){
    $('#tab3 .mask-small').show(0, function(){    
      var loading = setTimeout(function () {
        $('.mask-layout').fadeOut(400)
      }, 3000)
    })
  });
    
  
  

  // 儲存動畫示意
  $('#save_btn').click(function() {
    $('body').addClass('fixed')
    $('.mask-txt').text('儲存中')
    $('.mask-layout').fadeIn(300, function() {
      var success = setTimeout(function() {
        $('.mask-txt').text('儲存完成')
        $('.mask-icon').addClass('success')
        $('body').removeClass('fixed')
        $('.mask-layout').fadeOut(2000,function(){
          
          $('.mask-icon').removeClass('success')
        })
      }, 3000)
    })
  })

  $('.popover1').on('click touchstart',function(){
    $('.more-info').hide();
    $(this).next('.more-info').show();
  });
  $(document).on('click touchstart', function (e) {
    if (!$(e.target).closest('.popover1').length ) {
      $('.more-info').hide();
    }
    if(!$(e.target).closest('.popover2').length){
      $('.more-info1').hide();
    }
  });
  $('.popover2').on('click touchstart',function(){
    $('.more-info1').hide();
    
    $(this).next('.more-info1').show();
  });

  $('.more').on('click',function(){
    console.log($(this).next('.more-info2'));
    if($('.more-info2').css('display')=='none'){
      $('.more-info2').css('display','inline');
    }else{
      $('.more-info2').css('display','none');
    }
    // $(this).next('.more-info2').show();

  })



})
