jQuery(document).ready(function($) {
    selectedIndex = 0;
    var imagesArray = [
        'https://s3-us-west-1.amazonaws.com/flurred/dd2.jpg',
        'https://s3-us-west-1.amazonaws.com/flurred/dd3.jpg',
        'https://s3-us-west-1.amazonaws.com/flurred/dd12.jpg',
        'https://s3-us-west-1.amazonaws.com/flurred/dd16.jpg',
        'https://s3-us-west-1.amazonaws.com/flurred/dd17.jpg',
        'https://s3-us-west-1.amazonaws.com/flurred/dd18.jpg',
        'https://s3-us-west-1.amazonaws.com/flurred/dd19.jpg'
    ];
    var indexCounter = imagesArray.length;
    var indexDots = '';
    for(var a = 0; a < indexCounter; a++) {
        indexDots = indexDots + '<i data-selected="false" class="far fa-circle"></i>';
    }
    $('#paginationContainer').append(indexDots);
    for(i = 0; i < imagesArray.length; i++) {
        $('#slideShowContainer').append('<div class="slide" id="slide-' + i +'" style="background-image: url(\' ' + imagesArray[i] + ' \')"></div>');
    }
    $('#slide-0').css('display', 'block');
    $('#paginationContainer i:nth-child(1)').removeClass('far').addClass('fas');
    $('#prevArrow').on('click', function(e){
        e.preventDefault();
        console.log('prev');
        if(selectedIndex === 0) {
            $('#slide-' + (imagesArray.length-1).toString()).animate({
                left: "150%"
            },0);
            $('#slide-' + (imagesArray.length-1).toString()).css('display', 'block');
            $('#slide-' + selectedIndex).animate({
                left: "-150%"
            }, 500);
            $('#slide-' + (imagesArray.length-1).toString()).animate({
                left: "0%"
            }, 500);
            selectedIndex = imagesArray.length-1;
            selector = '#paginationContainer i:nth-child(' + (selectedIndex + 1) + ')';
            selector2 = '#paginationContainer i:nth-child(1)';
            $(selector2).removeClass('fas').addClass('far');
            $(selector).removeClass('far').addClass('fas');
        }
        else {
            $('#slide-' + (selectedIndex-1).toString()).animate({
                left: "150%"
            },0);
            $('#slide-' + (selectedIndex-1).toString()).css('display', 'block');
            $('#slide-' + selectedIndex).animate({
                left: "-150%"
            }, 500);
            $('#slide-' + (selectedIndex-1).toString()).animate({
                left: "0%"
            }, 500);
            selectedIndex = selectedIndex - 1;
            selector = '#paginationContainer i:nth-child(' + (selectedIndex + 1) + ')';
            selector2 = '#paginationContainer i:nth-child(' + (selectedIndex + 2) + ')';
            $(selector2).removeClass('fas').addClass('far');
            $(selector).removeClass('far').addClass('fas');
        }
    });
    $('#nextArrow').on('click', function(e){
        e.preventDefault();
        console.log(selectedIndex);
        if(selectedIndex === imagesArray.length-1) {
            $('#slideShowContainer').css('background-image', 'url(\'' + imagesArray[0] + '\')');
            selectedIndex = 0;
            selector = '#paginationContainer i:nth-child(' + (selectedIndex + 1) + ')';
            selector2 = '#paginationContainer i:nth-child(' + (imagesArray.length) + ')';
            $(selector2).removeClass('fas').addClass('far');
            $(selector).removeClass('far').addClass('fas');
        }
        else {
            $('#slide-' + (selectedIndex+1).toString()).animate({
                left: "150%",
            },0);
            $('#slide-' + (selectedIndex+1).toString()).css('display', 'block');
            $('#slide-' + selectedIndex).animate({
                left: "-150%"
            }, 500);
            $('#slide-' + (selectedIndex+1).toString()).animate({
                left: "0%"
            }, 500);
            selectedIndex = selectedIndex + 1;
            selector = '#paginationContainer i:nth-child(' + (selectedIndex + 1) + ')';
            selector2 = '#paginationContainer i:nth-child(' + (selectedIndex) + ')';
            $(selector2).removeClass('fas').addClass('far');
            $(selector).removeClass('far').addClass('fas');
        }
    });
});