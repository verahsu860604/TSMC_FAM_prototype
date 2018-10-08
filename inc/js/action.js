// import $ from './jquery-3.3.1.min.js'

function switchWorkOrder(){

    if($(this).prop('checked')){
      $('.tr2').hide();
      $('.close_child').attr('src','../inc/svg/open.svg');
      $('.close_child').attr('class','open_child');
    }else{
      $('.tr2').show();
      $('.open_child').attr('src','../inc/svg/minus.svg');
      $('.open_child').attr('class','close_child');
    }

    // ($(this).prop('checked') )? $('.tr2').hide() : $('.tr2').show() ;
}
function switchWorkOrder1(){
  console.log($(this).prop('checked'));

  if(!$(this).prop('checked')){
    $('.tr2').hide();
    $('.close_child').attr('src','../inc/svg/open.svg');
    $('.close_child').attr('class','open_child');
  }else{
    $('.tr2').show();
    $('.open_child').attr('src','../inc/svg/minus.svg');
    $('.open_child').attr('class','close_child');
  }
}
function switchSingleWorkOrder(){
  if($(this).attr('class')=='open_child'){
    let name=$(this).parent().parent().siblings(".main").children('.txt_big').text();
    $(this).parent().parent().parent().siblings('.'+name).show();
    $(this).attr('src','../inc/svg/minus.svg');
    $(this).attr('class','close_child');
  }else if($(this).attr('class')=='close_child'){
    let name=$(this).parent().parent().siblings(".main").children('.txt_big').text();
    $(this).parent().parent().parent().siblings('.'+name).hide();
    $(this).attr('src','../inc/svg/open.svg');
    $(this).attr('class','open_child');
  }
}

function openCamera(e) {
  const { className } = e.currentTarget
  className.split(' ')[0] === 'search-scan'
    ? $('#scan1')[0].click()
    : $('#scan2')[0].click()
}

function getMoreSearchDatas() {
  let searchInfo = '進階搜尋：'
  let datas = []
  $('.modal-row > input')
    .toArray()
    .map(el => {
      if (el.value !== '') {
        datas.push(el.value)
      }
    })
  datas.map((data, index) => {
    searchInfo += data
    if (index !== datas.length - 1) {
      searchInfo += ','
    }
  })
  $('.ui-search')
    .attr('disabled', 'disabled')
    .css('display', 'none')
  $('.more_search').css('display', 'flex')
  $('.more_search .txt').text(searchInfo);
  $('.cross').show();
  $('.cross').click(showSearch)
  $('.ui-search').val('');
  $('.clear').hide();
}


function showSearch() {
  $('.ui-search').css('display', 'block').prop('disabled',false);
  $('.more_search').css('display', 'none')
}

function activeTab() {
  let id = $(this)
    .parent()
    .parent()
    .attr('id')
    .split('')[3]
  id = parseInt(id)
  $('.tablist > li').removeClass('active');
  $(`.tablist > li:nth-child(${id + 1})`).addClass('active')
}

function activeMenu() {
  $('.btn_org12').removeClass('active');
  $(this).addClass('active');

}

function clearData(){
  $('.d1').val('');
  $('.d2').val('');
  $('.d3').val('');
  $('.d4').val('');
  $('.d5').val('');
  $('.d6').val('');
}

function finish(){
  $(this).html('本日完成(16)');
  $('.today').html('本日(含)以前');
  $('#tab1').hide();
  $('#tab2').show();
}

function applyTab() {
  $('#storageTab').hide();
  $('#storageBtn').hide();
  $('#applyTab').show();
}

function storageTab() {
  $('#applyTab').hide();
  $('#storageBtn').show();
  $('#storageTab').show();
}

function doneTab() {
  console.log('inventory pressed');
  $('#inventoryTab').hide();
  $('#doneTab').show();
}

function inventoryTab() {
  console.log('inventory pressed');
  $('#doneTab').hide();
  $('#inventoryTab').show();
}

function today(){
  $('.finish').html('本日完成');
  $(this).html('本日(含)以前(16)');
  $('#tab1').show();
  $('#tab2').hide();
}

function today1(){
  $('#tab1').show();
  $('#tab2').hide();
}

function setToZero(){
  $('input[name=checkboxSingle]').prop('checked', false);
  $('input[name=checkboxAllSelect]').prop('checked', false);

}
function showPassword(){
  if($('.password').attr('type')=='password'){
    $('.password').clone().prop('type','text').insertAfter('.password').prev().remove();
  }else if($('.password').attr('type')=='text'){
    $('.password').clone().prop('type','password').insertAfter('.password').prev().remove();
  }
}

$(() => {
  // $('#switch').on('change', switchWorkOrder);
  $('.s1').on('change', switchWorkOrder1);
  $('.s2').on('change', switchWorkOrder);  
  $('.search-scan').click(openCamera);
  $('.ui-scan').click(openCamera);
  $('.submit_btn').click(getMoreSearchDatas);
  // $('.btn_org1').click(activeTab);
  $('.btn_org12').click(activeMenu);
  $('.clear_data').click(clearData);
  $('.finish').click(finish);
  $('.today').click(today);
  $('.storage').click(storageTab);
  $('.apply').click(applyTab);
  $('.inventoryList').click(inventoryTab);
  $('.inventoryDone').click(doneTab);
  $('.close_child').click(switchSingleWorkOrder);
  $('.open_child').click(switchSingleWorkOrder);
  $('.manpower').click(setToZero);
  $('.tool').click(setToZero);
  $('.material').click(setToZero);
  $('.show-password').click(showPassword);


})
