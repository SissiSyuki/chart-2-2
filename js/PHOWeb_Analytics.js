$(function () {

    // Download tracking event triggers

    $('[href$=".pdf"],[href$=".zip"],[href$=".xls"],[href$=".xlsx"],[href$=".docx"],[href$=".pptx"],[href$=".vstx"],[href$=".doc"],[href$=".ppt"],[href$=".vst"],[href$=".mdb"],[href$=".one"]').click(function () {

        var url = $(this).attr('href');


        if (typeof _gaq !== 'undefined') { // Check to make sure GA is installed properly - don't want to error browser if not			
            _gaq.push(['_trackEvent', 'phoweb_event', 'download', url]); // For older non-Universal analytics engine

        }

        if (typeof ga !== 'undefined') {
            ga('send', 'event', 'phoweb_event', 'download', url);
        }

    });

});






