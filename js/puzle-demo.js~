var correctCards = 0;
$(init);

function init() {


    $("table td").each(function () {

        if ($(this).html().trim().length == 0)

            $(this).addClass("h");

    });


  //drag and drop

    $("#a tr td").draggable({
        appendTo: "body",
        helper: 'clone',
        cursor: "move",
        revert: "invalid",

    });



    $('#a tr td').droppable({
        accept: function (ui, item) {
            if ($(this).html().trim().length != 0)
                return false;

            //if($(ui).index()==$(this).index())
            //return true;
            var $tr = $(this).parent();
            var index = $(this).index();
            if ($(ui).is($tr.prev().find('td').eq(index)))
                return true;

            if ($(ui).is($tr.next().find('td').eq(index)))
                return true;

            var next = $(this).next().get(0);
            var prev = $(this).prev().get(0);
            var me = ui.get(0);

            if (me == next || me == prev)
                return true;

            return false;
        },
        drop: function (event, ui) {
            var draggable = $(ui.draggable),
                droppable = $(this),
                draggableClass = draggable.attr('class'),
                droppableClass = droppable.attr('class');

            droppable.append(draggable.text());
            draggable.attr('class', droppableClass);
            droppable.attr('class', draggableClass);
            draggable.empty();
            reference();


        }
    });

}


//check for valid board
var reference = (function valid() {
    // code...


    var ans = Array();

    $("#a tr").each(function (i, v) {
        ans[i] = Array();
        $(this).children('td').each(function (ii, vv) {
            ans[i][ii] = $(this).text();
        });
    })




    var qns = Array();

    $("#c tr").each(function (k, v2) {
        qns[k] = Array();
        $(this).children('td').each(function (kk, vv2) {
            qns[k][kk] = $(this).text();
        });
    })




    var one = ans.toString();
    var two = qns.toString();




    if (one == two) {
        $('#overlay').fadeIn('fast', function () {
            $('#box').animate({
                'top': '160px'
            }, 500);
        });
    }

    return valid; //return the function itself to reference

}()); //auto-run


$('#boxclose').click(function () {
    $('#box').animate({
        'top': '-200px'
    }, 500, function () {
        $('#overlay').fadeOut('fast');
    });
});
