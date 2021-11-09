$(function () {
    $('.accordion').on('click', '.accordion-control', function (e) {
        console.log("Event data", e);
        e.preventDefault();
        console.log("this is ", this);
        $(this)
            .toggleClass('active')
            .next('.accordion-panel')
            .slideToggle(1000);
    });

    $('.tab-list').each(function () {
        // Find lists of tabs
        var $this = $(this);                                    // Store this list

        $this.on('click', '.tab-control', function (e) {        // Click tab
            e.preventDefault();                                 // Prevent link
            var $currentLink = $(this);                         // Store current link
            var $currentTab = $currentLink.parent();
            var currentId = this.hash;                          // Get clicked tab

            if (currentId && !$currentTab.is('.active')) {     // If not active

                var $oldActivetab = $this.find('li.active');        // Get the active li
                var $oldSelector = $oldActivetab.find('a').attr('href');     // get the value of the href on the anchor
                var $oldPanel = $($oldSelector);                    // Get active panel

                $oldPanel.removeClass('active');                // Make panel and
                $oldActivetab.removeClass('active');            // tab inactive

                $(currentId).addClass('active');                // Make new panel and
                $currentTab.addClass('active');       // tab active
            }
        });
    });
});