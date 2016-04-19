$(function(){

  $('.tab-panels .tabs li').on('click',function(){
    var slideTime = 200;
    var $panel = $(this).closest('.tab-panels');
    $panel.find('.tabs li.active').removeClass('active');
    $(this).addClass('active');
    //figure out which panel to show
    var panelToShow = $(this).attr('rel');

    //hide current panel
    $panel.find('.panel.active').slideUp(slideTime, showNextPanel);

    function showNextPanel(){
      $(this).removeClass('active');
      $('#'+panelToShow).slideDown(slideTime, function(){
        $(this).addClass('active');
      })
    }




    //show new panel
  });

});
