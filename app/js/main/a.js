$(document).ready(function()
{
    $('#pollSlider-button').click(function() {
        if($(this).css('margin-right') === '200px')
        {
            $('.pollSlider').animate({'margin-right': '-=200'});
            $('#pollSlider-button').animate({'margin-right': '-=200'});
        }
        else
        {
            $('.pollSlider').animate({'margin-right': '+=200'});
            $('#pollSlider-button').animate({'margin-right': '+=200'});
        }


    });
});