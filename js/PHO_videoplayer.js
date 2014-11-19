/* ---------------------------------------------------------------------------
 PHO_videoPlayer.js
 ----------------------------------------------------------------------------*/
var Video = Video || {
        url: '',
        autoplay: false,
        ratio: null,
        playerHTML: function () {
            var self = this;
            var autoplay = self.autoplay ? 'autoplay' : '';
            var HTML = '<div class="flowplayer functional color-light"  style="min-height: 342px;">\n ' +
                '	   <video id="thevideo" class="videoclass" poster="/Style%20Library/PHO_VideoPlayer/splash_pho.png"' + autoplay + '>\n' +
                '        <source type="video/mp4" src="' + self.url + '">\n    ' +
                '      </video>\n' +
                '    </div>\n'; // Close flowplayer div
            return HTML;
        },
        popupHTML: function () {
            var self = this;
            var HTML = '<div class="overlay"></div> \n' +
                '<div class="container">\n' +
                '  <div class="chrome">\n' +
                '    <a href="#close" title="Close" class="close"></a>\n' +
                self.playerHTML() +
                '  </div>\n' + // Close chrome div
                '</div>';  // Close container div
            return HTML;
        },
        popup: function () {
            var self = this;
            context = this;
            var $popup = $('<div class="PHO_VideoPlayer popup"></div>');
            $popup.remove();
            $("body").prepend($popup);
            $popup.fadeTo("slow", 1, function () {
                $popup.html(self.popupHTML()).find('.container').css({
                    marginLeft: function () {
                        return $(this).width() / 2 * -1;
                    },
                    marginTop: function () {
                        return $(this).height() / 2 * -1;
                    }
                }).find('[href*=#close]').click(function () {
                    $popup.fadeOut().empty().remove();
                    if (navigator.userAgent.indexOf('MSIE') !== -1) {
                        location.reload();
                    }
                    return false;
                });

                self.init();

                setTimeout(function () {
                    // Show Splash screen for 2 seconds
                    if ($('.videoclass').get(0) !== 'undefined') {
                        $('.videoclass').get(0).play();
                    }
                    //$('#thevideo').get(0).play();
                }, 2000);


            });
        },
        init: function () {
            var self = this;
            $('.flowplayer').flowplayer({
                play: null, // Supposed to stop center play button from showing, instead had to delete file
                ratio: self.ratio,
                adaptiveRatio: true,
                fullscreen: true
            });
        }
    };

$(function () {
    $('[href$=".mp4"]').click(function () {

        Video.url = $(this).attr('href');
        Video.autoplay = false;
        Video.popup();

        var url = $(this).attr('href');

        if (typeof _gaq !== 'undefined') {
            _gaq.push(['_trackEvent', 'phoweb_event', 'video_play', url]);
        }

        if (typeof ga !== 'undefined') {
            ga('send', 'event', 'phoweb_event', 'video_play', url);
        }

        return false;
    });
});






