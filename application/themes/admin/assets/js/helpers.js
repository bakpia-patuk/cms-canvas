function show_status(text, auto_hide, show_animation)
{
    // Init
    auto_hide = auto_hide !== 'undefined' ? auto_hide : false;
    show_animation = show_animation !== 'undefined' ? show_animation : false;

    var status = $('#ajax_status');

    // Show animated gif
    if (show_animation)
    {
        $('#ajax_status_animation').show();
    }
    else
    {
        $('#ajax_status_animation').hide();
    }

    // Update status text
    $('#ajax_status_text').html(text);

    // Show status box
    if ( ! status.is(':visible'))
    {
        status.fadeIn('slow');
    }

    // Hide status box
    if (auto_hide)
    {
        status.delay(1000).fadeOut('slow');
    }
}

function hide_status()
{
    var status = $('#ajax_status');

    status.fadeOut('slow');
}

$(document).ready(function() {
    $('#current_user').click(function() {
        if ($('#current_user_dropdown').is(":visible")) {
            $('#current_user_dropdown').hide();
            $('#current_user_box_pointer').hide();
            $('#current_user_box_pointer_white').hide();
        } else {
            $('#current_user_dropdown').show();
            $('#current_user_box_pointer').show();
            $('#current_user_box_pointer_white').show();
        }
    });

    $(document).mouseup( function (e) {
        if ($('#current_user_dropdown').is(":visible") 
            && $(e.target).parents('#current_user_dropdown').length == 0 
            && $(e.target).parents('#current_user').length == 0
        ) {
            $('#current_user_dropdown').hide();
            $('#current_user_box_pointer').hide();
            $('#current_user_box_pointer_white').hide();
        }
    });

    $('.notification .dropdown_close').click(function() {
        $(this).parent('.notification').remove();
    });
});