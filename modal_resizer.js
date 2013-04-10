;(function ( $, window, document ) {

    var defaults = {
        modalClass: 'reveal-modal',
        outerPadding: 250,
        minHeight: 250,
      };

    $(window).on('modal-opened', function() {
      // Plugin functionality is trigger by a window event called 'modal-opened'
      // grab the opened modal; get the party started
      // adding the class "no-resize" to a modal will prevent this plugin from modifying the size of the modal
      $("."+defaults.modalClass+"[style*='visible']:not(.no-resize)").modalResize();
    });
    

    function ModalResize( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;        
        this.init();
    }

    ModalResize.prototype = {
      init : function () {
          // use this.element and this.options
          this.outerPadding = this.options.outerPadding;
          this.minHeight = this.options.minHeight;
          this.startingHeight = $(this.element).height();
          
          //only apply this resize handler if the modal is too big for the window
          if(this.startingHeight >= ($(window).height()-this.outerPadding)){
            this.resizeModal($(window).height());
          }

      },

      resizeModal : function(winHeight) {
        var magicHeight = ((winHeight) > this.outerPadding*2 ? winHeight-this.outerPadding : this.minHeight),
            el = $(this.element);

        if(winHeight < this.minHeight) // we've hit the minimum height
          el.css('max-height', this.minHeight);
        else
          el.css('max-height', magicHeight);

        el.css('overflow', 'auto');
      },
    }

    $.fn.modalResize = function ( options ) {
        return this.each(function () { 
            new ModalResize( this, options );
        });
    }

})( jQuery, window, document );