$(".typed-text").fb_typed({
  typeSpeed: 2,
  showCursor: false
});

!(function($) {
  $.fn.fb_typed = function(passed_options) {
    return this.each(function() {
      var $self = $(this),
          text = $self.html();

      $self.empty().addClass('typing-initialized');

      var options = $.extend({
        strings: [text],
        typeWords: false
      }, passed_options);

      // If the typeWords option is set, then we want to type fast. So, we have
      // to separate the text by CHUNKS of characters rather than just characters.
      if (options.typeWords) {
        var lines = text.split('<br>'),
            lineIndex = 0;

        if (lines.length === 0) {
          return;
        }

        // render a line of text
        var renderLine = function(chunk) {
          if (lineIndex > lines.length) {
            options.callback();
            return;
          }

          if (!chunk) {
            $self.append('<br>');
            lineIndex++;
            renderLine(lines[lineIndex]);
          } else {
            var chunkArray = chunk.match(/.{1,4}/g),
                chunkIndex = 0;

            var chunkInterval = setInterval(function() {
              if (chunkArray[chunkIndex]) {
                $self.append(chunkArray[chunkIndex]);
                chunkIndex++;
              } else {
                $self.append('<br>');
                lineIndex++;
                clearInterval(chunkInterval);
                renderLine(lines[lineIndex]);
              }
            }, 20);
          }
        };

        renderLine(lines[lineIndex]);
      }
      else {
        // If the typedWords option is not enabled, then just usethe typed plugin
        $(this).typed(options);
      }

    });
  };
})(jQuery);
