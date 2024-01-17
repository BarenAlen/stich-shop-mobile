$(function(){

	var availableTags = [
      {label: "ActionScript", concurrence: "33 совпадений найдено"},
      {label: "AppleScript", concurrence: "33 совпадений найдено"},
      {label: "Asp", concurrence: "33 совпадений найдено"},
      {label: "BASIC", concurrence: "33 совпадений найдено"},
      {label: "C", concurrence: "33 совпадений найдено"},
      {label: "C++", concurrence: "33 совпадений найдено"},
      {label: "Clojure", concurrence: "33 совпадений найдено"},
      {label: "COBOL", concurrence: "33 совпадений найдено"},
      {label: "ColdFusion", concurrence: "33 совпадений найдено"},
      {label: "Erlang", concurrence: "33 совпадений найдено"},
      {label: "Fortran", concurrence: "33 совпадений найдено"},
      {label: "Groovy", concurrence: "33 совпадений найдено"},
      {label: "Haskell", concurrence: "33 совпадений найдено"},
      {label: "Java", concurrence: "33 совпадений найдено"},
      {label: "JavaScript", concurrence: "33 совпадений найдено"},
      {label: "Lisp", concurrence: "33 совпадений найдено"},
      {label: "Perl", concurrence: "33 совпадений найдено"},
      {label: "PHP", concurrence: "33 совпадений найдено"},
      {label: "Python", concurrence: "33 совпадений найдено"},
      {label: "Ruby", concurrence: "33 совпадений найдено"},
      {label: "Scala", concurrence: "33 совпадений найдено"},
      {label: "Scheme", concurrence: "33 совпадений найдено"}
    ];

	$("#search").autocomplete({
		source: availableTags
	}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
	  return $( "<li>" )
	    .data( "ui-autocomplete-item", item )
	    .append('<a href="#">' + item.label + '<span>' + item.concurrence + '</span></a>')
	    .appendTo( ul );
	};

      var $mainNav = $("#main-nav"),
          $siteSearch = $("#site-search");

      $("#main-nav-open, #main-nav-close").click(function() {

            if ($mainNav.hasClass("expanded")) {
                $mainNav.removeClass("expanded");
            } else {
                $mainNav.addClass("expanded");
            }
      });

      $("#site-search-open, #site-search-close").click(function() {

            if ($siteSearch.hasClass("expanded")) {
                $siteSearch.removeClass("expanded");
            } else {
                $siteSearch.addClass("expanded");
            }
      });


      $(".showcase-owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true
      });

      $(".weekly-owl-carousel").owlCarousel({
            items: 2,
            loop: false,
            dots: true,
            autoWidth:true
      });

      $(".cards-owl-carousel").owlCarousel({
            items: 2,
            loop: true,
            dots: true,
            autoWidth:true,
            margin: 10
      });

      // TABS

      var $tabControls = $(".tab-controls button"),
          $tabs = $(".tab");

      $tabs.each(function() {

        if(!$(this).hasClass('tab-active')) {
          $(this).hide();
        }
      });

      var toggleTab = function(tab) {

        var $tabActive = tab.closest(".tabs-content").find(".tab-active");

        $tabActive.removeClass('tab-active').hide();

        tab.addClass("tab-active").show();
      }

      $tabControls.each(function(index, btn) {

        $(this).click(function() {

          var id = $(this).attr('data-tab');


          $tabControls.each(function() {
            $(this).removeClass('active');
          });

          $(this).addClass('active');

          toggleTab($('#' + id));
        });
      });

  // Показать label если инпут пустой и спрятать если нет

  $(".input-text > input:empty, .input-text > textarea:empty").on("blur", function() {
    if($(this).val()) {
      
      $(this).next().hide();
    } else {
      $(this).next().show();
    }
  });

  $( ".spinner" ).spinner({
    min: 0
  });

  $(".slide__toggler").click(function() {
    $(this).toggleClass("active").next().slideToggle(400);
  });
});