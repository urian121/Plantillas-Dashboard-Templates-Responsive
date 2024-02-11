$(document).ready(function() {

  
  "use strict";

  var $owl = $('.nav-tab-align');

  $owl.children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
  });

  $owl.owlCarousel({
    center: true,
    loop: true,
    items: 3,
  });

  $(document).on('click', '.owl-item>div', function() {
    var data_tab = $(this).find('h2').attr('profile-tab');
     
        $('.profile-content-tab').fadeOut(0);
        $('#'+data_tab).fadeIn(300);
    
    var $speed = 300; 
    $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
  });




  $('#pagetour').modal();
  $('#pagetour').on('hidden.bs.modal', function (e) {
    $('body').removeClass('blureffect');
    $('#videocall').fadeOut(0);
    $('#videocall,.modal-backdrop,.model-bg').fadeOut();
    return false;
  })

  nicescroll();

    $('.nav-content-bttn').on('click', function() {
        $('.nav-content ul li a').removeClass('active');
        $(this).addClass('active');
        var data_tab = $(this).attr('data-tab');
        $('.sidebar').removeClass('active');
        $('#'+data_tab).addClass('active');
        return false;
    });
    // $('.profile_tab').on('click', function() {
    //     
    // });

    

    
    $('.night-mode').on('click', function() {
      $('body').toggleClass('dark');
      return false;
    });



    

    $('.sidebar-right').on('click', function() {
      $('.profile-content').toggleClass('active');
      $(this).find('i').toggleClass('ti-angle-left ti-angle-right');
      return false;
    });


    $('.close-icon').on('click', function() {
      $('.profile-content').removeClass('active');
      return false;
    });

    $('.chat-list-item .avatar,.chat-list-item .chat-bttn').on('click', function() {
      $('.chat-content').addClass('mobile-active');
      return false;
    });

    $('.back-chat-div').on('click', function() {
      $('.chat-content').removeClass('mobile-active');
      return false;
    });
    

    

    $('.slider-0').owlCarousel({
      loop:false,
      margin:0,
      nav:false,
      autoplay:true,  
      dots:false,
      responsive:{
          0:{
              items:6
          },
          600:{
              items:6
          },
          1000:{
              items:6
          },
          1400:{
              items:3
          }
      }
    })
    var owlslide_1 = $('.slider-1')
    owlslide_1.owlCarousel({
      loop:false,
      margin:0,
      nav:false,
      autoplay:false,  
      dots:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    })

    $('.start-tour,.next-tour').on('click', function() {
      owlslide_1.trigger('next.owl.carousel');
    });

    $('.tour-close-btn').on('click', function() {
        $('body').removeClass('blureffect');
        $('#pagetour').removeClass('show').fadeOut();
        $('.modal-backdrop,.model-bg').fadeOut(500);        
        return false;
    });

    $('#videocall-bttn').on('click', function() {
        $('body').addClass('blureffect');
        $('#videocall,.modal-backdrop,.model-bg').fadeIn();
        return false;
    });
    $('#video-close').on('click', function() {
        $('body').removeClass('blureffect');
        $('#videocall').fadeOut(0);
        $('#videocall,.modal-backdrop,.model-bg').fadeOut();
        return false;
    });

    $('#addfriend-bttn').on('click', function() {
        $('body').addClass('blureffect');
        $('#addfriend,.modal-backdrop,.model-bg').fadeIn();
        return false;
    });
    $('#addfriend-close').on('click', function() {
        $('body').removeClass('blureffect');
        $('#addfriend').fadeOut(0);
        $('#addfriend,.modal-backdrop,.model-bg').fadeOut();
        return false;
    });

    $('#addnote-bttn').on('click', function() {
        $('body').addClass('blureffect');
        $('#addnote,.modal-backdrop,.model-bg').fadeIn();
        return false;
    });
    $('#addnote-close').on('click', function() {
        $('body').removeClass('blureffect');
        $('#addnote').fadeOut(0);
        $('#addnote,.modal-backdrop,.model-bg').fadeOut();
        return false;
    });
    $('.emoji-bttn').on('click', function() {
        $('.emoji-wrap').toggleClass('active');
        return false;
    });

    
    

    
    

    

    $('body').addClass('blureffect');
    $('#pagetour').addClass('show').fadeIn();


    
   
   
  
});

function nicescroll() {
    $(".chat-body,.chat-list-content,.scroll-profile").niceScroll({
    cursorcolor: "#eee", // change cursor color in hex
    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
    cursorwidth: "3px", // cursor width in pixel (you can also write "5px")
    cursorborder: "0px solid #fff", // css definition for cursor border
    cursorborderradius: "5px", // border radius in pixel for cursor
    zindex: "auto", // change z-index for scrollbar div
    scrollspeed: 60, // scrolling speed
    mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
    touchbehavior: false, // enable cursor-drag scrolling like touch devices in desktop computer
    hwacceleration: true, // use hardware accelerated scroll when supported
    boxzoom: false, // enable zoom for box content
    dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
    gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
    grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
    autohidemode: true, // how hide the scrollbar works, possible values: 
    background: "", // change css for rail background
    iframeautoresize: true, // autoresize iframe on load event
    cursorminheight: 32, // set the minimum cursor height (pixel)
    preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
    railoffset: false, // you can add offset top/left for rail position
    bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
    spacebarenabled: true, // enable page down scrolling when space bar has pressed
    disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
    horizrailenabled: true, // nicescroll can manage horizontal scroll
    railalign: "right", // alignment of vertical rail
    railvalign: "bottom", // alignment of horizontal rail
    enabletranslate3d: true, // nicescroll can use css translate to scroll content
    enablemousewheel: true, // nicescroll can manage mouse wheel events
    enablekeyboard: true, // nicescroll can manage keyboard events
    smoothscroll: true, // scroll with ease movement
    sensitiverail: true, // click on rail make a scroll
    enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
    cursorfixedheight: false, // set fixed height for cursor in pixel
    hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
    irectionlockdeadzone: 6, // dead zone in pixels for direction lock activation
    nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
    enablescrollonselection: true, // enable auto-scrolling of content when selection text
    cursordragspeed: 0.3, // speed of selection when dragged with cursor
    rtlmode: "auto", // horizontal div scrolling starts at left side
    cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
    oneaxismousemode: "auto", 
    scriptpath: "", // define custom path for boxmode icons ("" => same script path)
    preventmultitouchscrolling: true,// prevent scrolling on multitouch events
    disablemutationobserver: false,
  });
}
 

