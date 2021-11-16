$.fn.photoViewer = function() {
    var request; // Last image request
    var $current; // Current image
    var cache = {}; // Cache object

    var $frame = $('.photo-frame'); // Container
    var $thumbs = $('.thumb'); // Container

    function crossfade($img) { // New image as parameter
        if ($current) { // If image showing
        $current.stop().fadeOut("slow"); // Stop animation & fade out
        }
        $img.css({ // Set CSS margins for new img
        marginLeft: -$img.width() / 2, // Neg margin 1/2 image width
        marginTop: -$img.height() / 2 // Neg margin 1/2 image height
        });
        $img.stop().fadeTo('slow', 1); // Stop animation & fade in
        $current = $img; // New image is current one
    }

    $(document).on('click', '.thumb', function(e) { // Click on thumb
        var $img; // Local var called $img
        var src = this.href; // Store path to image
        var request = src; // Store latest image
        e.preventDefault(); // Stop default link behavior
        $thumbs.removeClass('active'); // Remove active from thumbs
        $(this).addClass('active'); // Add active to clicked one
        if (cache.hasOwnProperty(src)) { // If cache contains this img
            if (cache[src].isLoading === false) { // and it’s not loading
                crossfade(cache[src].$img); // Call crossfade() function
            }
        } else { // Otherwise it is not in the cache
            $img = $('<img/>'); // Store empty <img/> in $img
            cache[src] = { // Store this image in cache
                $img: $img, // Add the path to the image
                isLoading: true // Set isLoading to false
            };
            // When image has loaded this code runs
        $img.on('load', function() { // When image loaded
        $(this).hide(); // Hide it
        // Remove is-loading class & append image
        $frame.removeClass('is-loading').append($img);
        cache[src].isLoading = false; // Update isLoading in cache
        // If still most recently requested image then
        if (request === src) {
            crossfade($(this)); // Call crossfade()function
        } // to solve async load issue
        });
        $frame.addClass('is-loading');
        $img.attr({ // Set attributes on <img>
            'src': src, // src attribute loads image
            'alt': this.title || '' // Add title if one given
            });
           // $('.photo-frame').attr('href', src);
         }
        

        })

    return this;
}

class Modal {
    // $window = $(window);
    // $modal = $('<div class="modal"></div>');

    constructor() {
        this.$window = $(window);
        this.$modal = $('<div class="modal"></div>');
        this.$content = $('<div class="modal-content"/>');
        this.$close = $('<button role="button" class="modal-close">Close</button>');

        this.$modal.append(this.$content, this.$close);
        this.$close.on('click', (e) => {
            e.preventDefault();
            this.close();
        });
    }

    center() {
        // Distance from top and left to center of modal
        var top = Math.max(this.$window.height() - this.$modal.outerHeight(), 0) / 2;
        var left = Math.max(this.$window.width() - this.$modal.outerWidth(), 0) / 2;
        // Set CSS for the modal
        this.$modal.css({
            top: top + this.$window.scrollTop(),
            left: left + this.$window.scrollLeft()
        });
    }

    open(settings) { // settings contains content, width and height
        this.$content.empty().append(settings.content);
        this.$modal.css({                          // Dimensions
            width: settings.width ?? 'auto',    // Set width
            height: settings.height || 'auto'   // Set height
        }).appendTo('body');                  // Add to page
        this.center();                       // Call center() again 
        this.$window.on('resize', () => this.center()); // On window resize
    }

    close() {
        // Remove content from the modal window
        this.$content.empty();
        // Remove modal window from the page
        this.$modal.detach();
        // Remove event handler
        this.$window.off('resize');
    }
}