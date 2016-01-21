

(function(){
  
    
    $('dd').filter(':nth-child(n+4)').hide();


    $('dl').on('mouseenter', 'dt', function(){
        $(this)
            .next()
            .slideDown()
                .siblings('dd')
                .slideUp(250);
                    
        
    })
})();