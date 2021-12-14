$(document).ready(function() {
    $('.btn-start').click(function() {
        $('.container-2').show();
    });
    var allowSubmit = true;
    $(document).on('submit', '#my-form', function() {
        if (allowSubmit) {
            allowSubmit = false;
            $('.prompt').hide();
        } else {
            return false;
        };
        var val = document.getElementById('nop').value;
        $('#nop-msg').text('Ilość graczy: ' + val);
        $('.after-submit').show();
        if (val == 6) {
            $('#miasto').text(4);
            $('#mafia').text(2);
            $('#syndykat').text(0);
            $('#krol_kier').show()
            var playable = ['#krol_kier', '#dama_kier', '#10_kier', '#2_kier', '#as_pik', '#dama_pik'];
            var step;
            for (step = 0; step < playable.length; step++) {
                $(playable[step]).css('display', 'inline-block');
                $(playable[step] + ' span').css('display', 'block');
            };
        } else if (val == 7) {
            $('#miasto').text(5);
            $('#mafia').text(2);
            $('#syndykat').text(0);
            var playable = ['#krol_kier', '#dama_kier', '#10_kier', '#7_kier', '#2_kier', '#as_pik', '#dama_pik'];
            var step;
            for (step = 0; step < playable.length; step++) {
                $(playable[step]).css('display', 'inline-block');
                $(playable[step] + ' span').css('display', 'block');
            };
        } else if (val == 8) {
            $('#miasto').text(5);
            $('#mafia').text(2);
            $('#syndykat').text(1);
            $('#syndykat-txt').css('display', 'inline-block');
            var playable = ['#krol_kier', '#krol_karo', '#dama_kier', '#10_kier', '#as_karo', '#as_pik', '#dama_pik', '#8_trefl'];
            var step;
            for (step = 0; step < playable.length; step++) {
                $(playable[step]).css('display', 'inline-block');
                $(playable[step] + ' span').css('display', 'block');
            };
        } else {
            $('#miasto').text(val+1);
            $('#mafia').text(val+2);
            $('#syndykat').text(val+3);
        };
        return false;
    });
});