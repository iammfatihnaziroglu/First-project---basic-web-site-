

 $(function(){
    
    $(".menu").on({
       
        mouseover: function(){

          $(this).css("color","black");


     },

     mouseleave: function(){

        $(this).css("color","rgb(250, 235, 217)");


   }, 
   


  });

  $(function(){
    
    $(".dil").on({
       
        mouseover: function(){

          $(this).css("color","black");


     },

     mouseleave: function(){

        $(this).css("color","rgb(250, 235, 217)");


   }, 
   


  });


});



$("#kapama").on({

    mouseover: function() {

  $("this").css("cursor","pointer");

    },

    click: function() {

        $("#cerez").css("display","none");
      
          },



});



$(".kirmizi").on({

  mouseover: function () {

    $(this).css("color","red");

  },

  mouseleave: function () {

    $(this).css("color","rgb(31, 180, 136)");

  },

});

$(".pembe").on({

  mouseover: function () {

    $(this).css("color","rgb(228, 97, 245)");

  },

  mouseleave: function () {

    $(this).css("color","rgb(31, 180, 136)");

  },

});

$(".acikmavi").on({

  mouseover: function () {

    $(this).css("color","aqua");

  },

  mouseleave: function () {

    $(this).css("color","rgb(31, 180, 136)");

  },

});

$(".mavi").on({

  mouseover: function () {

    $(this).css("color","rgb(42, 42, 218)");

  },

  mouseleave: function () {

    $(this).css("color","rgb(31, 180, 136)");

  },

});

});





