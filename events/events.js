(function() {
    var link = $('link');
    $('button').click(function(){
        var $this = $(this);
        var stylesheet = $this.data('file');
        link.attr('href', stylesheet + '.css');
        $this.attr('disabled' , 'disabled');
    });
})();