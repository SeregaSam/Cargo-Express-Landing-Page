
$(document).ready(function(){

         $('.circleBlock').parallaxie();
         $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
    });


         $(window).scroll(function(){
            if($(this).scrollTop() >= $('#endSlider').offset().top){
                $('nav').addClass('navbar-scroll');
                $('nav ul li a').addClass('scroll-links');
                $('nav ul li a i.fab').addClass('scroll-fab');
                $('nav ul button').addClass('nav-button-scroll');
            } else {
                $('nav').removeClass('navbar-scroll');
                $('nav ul li a').removeClass('scroll-links');
                $('nav ul button').removeClass('nav-button-scroll');
                $('nav ul li a i.fab').removeClass('scroll-fab');
            }
       });

       var date = new Date().getFullYear();
        $('#year').append(date);

      $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

    $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
    });

    $('#back-to-top').show();


    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".contact-slider-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".contact-slider-item")
              .eq(i)
              .appendTo(".contact-slider-inner");
          } else {
            $(".contact-slider-item")
              .eq(0)
              .appendTo($(this).find(".contact-slider-inner"));
          }
        }
      }
    });



    //Form send zayavka

    $('#what_face').change(function () {
      var gg = $('#what_face').val();
      if(gg != 'Юридическое лицо'){
        $('#PayerINNorPass').attr("placeholder", "Документ, удостоверяющий личность");
        $('.PayerPass').show();
      } else {
        $('#PayerINNorPass').attr("placeholder", "ИНН");
        $('.PayerPass').hide();
      }
    });

    // AJAX обратная связь

  $('#send_mail_button').click(function(){
    var form_data = {
      name: $("#Name").val(),
      email: $("#Email").val(),
      phone: $("#Phone").val(),
      message: $("#message").val()
    };

    $.ajax({
    type: "POST",
    url: "./mail.php",
    data: form_data,
    success: function() {
            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#message').val('');
            $('#allOK').modal('show');
          }
        });
    });



  // AJAX отправка заявки

  $('#sendZayavka ').click(function(){



    var form_data = {
      what_face_data: $("#what_face").val(), // юридическое или физическое лицо
      mainUsluga: $("#mainUsluga").val(),    // Основная услуга
      transVar: $("#transVar").val(),  // Вариант перевозки
      payPlace: $("#payPlace").val(),   // Место оплаты
      payVar: $("#payVar").val(),     // вариант платежа
      PayerName: $("#PayerName").val(),
      PayerINNorPass: $("#PayerINNorPass").val(),
      PayerPass: $("#PayerPass").val(),
      PayerCPP: $("#PayerCPP").val(),
      PayerUrAddress: $("#PayerUrAddress").val(),
      PayerAddress: $("#PayerAddress").val(),
      PayerContactFace: $("#PayerContactFace").val(),
      PayerContactPhone: $("#PayerContactPhone").val(),
      PayerContactEmail: $("#PayerContactEmail").val(),
      SendCompanyName: $("#SendCompanyName").val(),
      SendCompanyINN: $("#SendCompanyINN").val(),
      SendCompanyDocNum: $("#SendCompanyDocNum").val(),
      SendDate: $("#SendDate").val(),
      SendWorkTime: $("#SendWorkTime").val(),
      SendTime: $("#SendTime").val(),
      SendAddress: $("#SendAddress").val(),
      SendAddressStreet: $("#SendAddressStreet").val(),
      SendAddressHouse: $("#SendAddressHouse").val(),
      SendContactFace1: $("#SendContactFace1").val(),
      SendContactFacePhone1: $("#SendContactFacePhone1").val(),
      SendContactFace2: $("#SendContactFace2").val(),
      SendContactFacePhone2: $("#SendContactFacePhone2").val(),
      SenderComment: $("#SenderComment").val(),
      GetCompanyName: $("#GetCompanyName").val(),
      GetCompanyINN: $("#GetCompanyINN").val(),
      GetCompanyDocNum: $("#GetCompanyDocNum").val(),
      GetAddress: $("#GetAddress").val(),
      GetAddressStreet: $("#GetAddressStreet").val(),
      GetAddressHouse: $("#GetAddressHouse").val(),
      GetContactFace1: $("#GetContactFace1").val(),
      GetContactFacePhone1: $("#GetContactFacePhone1").val(),
      GetContactFace2: $("#GetContactFace2").val(),
      GetContactFacePhone2: $("#GetContactFacePhone2").val(),
      GetWorkTime: $("#GetWorkTime").val(),
      GetTime: $("#GetTime").val(),
      GetterComment: $("#GetterComment").val(),
      BoxMesto: $("#BoxMesto").val(),
      BoxWeight: $("#BoxWeight").val(),
      BoxSquare: $("#BoxSquare").val(),
      BoxX: $("#BoxX").val(),
      BoxY: $("#BoxY").val(),
      BoxZ: $("#BoxZ").val(),
      BoxHaracter: $("#BoxHaracter").val(),
      BoxComment: $("#BoxComment").val(),
      BoxSave: $("#BoxSave").is(':checked'),
      BoxWeight: $("#BoxWeight").val(),
      DocsBack: $("#DocsBack").is(':checked'),
      SendPRR: $("#SendPRR").is(':checked'),
      GetPRR: $("#GetPRR").is(':checked'),
      Hidrolift: $("#Hidrolift").is(':checked'),
      WoodObr: $("#WoodObr").is(':checked'),
      Pack: $("#Pack").is(':checked'),
      Pallet: $("#Pallet").is(':checked'),
      OutOfNormTime: $("#OutOfNormTime").is(':checked'),
      WeekendWork: $("#WeekendWork").is(':checked'),
      LateWork: $("#LateWork").is(':checked'),
      FIOmainface: $("#FIOmainface").val()
    };

    $.ajax({
      type: "POST",
      url: "./bidmail.php",
      data: form_data,
      success: function() {
                $('#bidModal').modal('hide');
                $('#allOK').modal('show');
            }
      });

    });


});
