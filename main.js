$(function(){

  var colors = ["red","blue","fuchsia"];
  var grey = "#666";
  var randomColor = function(){
      return colors[Math.floor(Math.random()*colors.length)];
    };
  var $active = $('.active');

  $('.tab-panels .tabs li').on('click',function(){
    var slideTime = 200;
    var newColor = randomColor();
    var $panel = $(this).closest('.tab-panels');
    $active.css({backgroundColor: grey});
    $panel.find('.tabs li.active').removeClass('active').css({backgroundColor: grey});
    $(this).addClass('active').css({backgroundColor: newColor});

    //figure out which panel to show
    var panelToShow = $(this).attr('rel');

    //hide current panel

    $panel.find('.panel.active').slideUp(slideTime, showNextPanel);

    function showNextPanel(){

      $(this).removeClass('active').css({backgroundColor: grey});
      $('#'+panelToShow).slideDown(slideTime, function(){
        $(this).addClass('active').css({backgroundColor: newColor});
      })
    }



    return false;
    //show new panel
  });

});
