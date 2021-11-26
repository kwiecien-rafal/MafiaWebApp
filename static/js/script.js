$(document).ready(function() {
    $('.btn').click(function() {
        console.log('yess')
        $('.container-2').show();
    });
    $(document).on('submit', '#my-form', function() {
        var val = document.getElementById('nop').value;
        console.log(val);
        $('#nop-msg').text('Ilość graczy: ' + val);
        $('.after-submit').show();
        if (val == 6) {
            $('#miasto').text(4);
            $('#mafia').text(2);
            $('#syndykat').text(0);
            var playable = ['#krol_kier', '#dama_kier', '#krol_karo', '#10_kier', '#as_pik', '#dama_pik'];
            var step;
            for (step = 0; step < playable.length; step++) {
                $(playable[step]).show();
            };
        } else {
            $('#miasto').text(val+1);
            $('#mafia').text(val+2);
            $('#syndykat').text(val+3);
        };
        return false;
    });
});