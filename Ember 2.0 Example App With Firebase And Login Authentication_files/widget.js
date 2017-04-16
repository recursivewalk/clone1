//Widget code from www.brandonhilkert.com/

window.Widget = {
  widget: $(".subscribe-widget"),
  open: $(".subscribe-widget .open"),
  close: $(".subscribe-widget .close"),

  init: function(){
    this.widget.fadeIn("slow");
  },

  show: function(){
    this.widget.animate({ bottom: 0 });
    this.open.fadeOut();
    this.close.fadeIn();
  },

  hide: function(){
    this.widget.animate({ bottom: "-310px" });
    this.close.fadeOut();
    this.open.fadeIn();
  }
}
$(document).on("click", ".subscribe-widget .title, .subscribe-widget .open", function(e){
  Widget.show();
});

$(document).on("click", ".subscribe-widget .close", function(e){
  Widget.hide();
});

$(document).ready(function(){
  Widget.init();
    $(document.links).filter(function() {
  		    return this.hostname != window.location.hostname;
  		}).attr('target', '_blank');

  setTimeout(
	  function() {
		  Widget.show();
	  }, 5 * 1000);

});


