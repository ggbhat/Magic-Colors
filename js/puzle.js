var correctCards = 0;
$(init);

function init() {


    //ganarate number


    // Set the max length of random number 
    // and the max length
    var maxLength = 4;

    // Returns a random number
    var getRand = (function () {
        var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, , 16];
        var current = [];

        function rand(n) {
            return (Math.random() * n) | 0;
        }
        return function () {
            if (!current.length) current = nums.slice();
            return current.splice(rand(current.length), 1);
        }
    }());

    //create table
    function UpdateTable() {

        for (var i = 0; i < maxLength; i++) {
            for (var j = 0; j < maxLength; j++) {
                tmp = 'cell' + i + j;
                document.getElementById(tmp).innerHTML = getRand();
            }
        }
    }

    UpdateTable();
    // Hide the success message

    $("table td").each(function () {

        if ($(this).html().trim().length == 0)

            $(this).addClass("h");

    });

    //add class for each color
    $('tbody tr td').each(function () {
        if ($(this).text() == "1") {
            $(this).addClass("a");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "2") {
            $(this).addClass("b");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "3") {
            $(this).addClass("c");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "4") {
            $(this).addClass("d");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "5") {
            $(this).addClass("e");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "6") {
            $(this).addClass("f");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "7") {
            $(this).addClass("g");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "8") {
            $(this).addClass("o");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "9") {
            $(this).addClass("i");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "10") {
            $(this).addClass("j");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "11") {
            $(this).addClass("k");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "12") {
            $(this).addClass("l");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "13") {
            $(this).addClass("m");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "14") {
            $(this).addClass("n");
        }
    });

    $('tbody tr td').each(function () {
        if ($(this).text() == "16") {
            $(this).addClass("p");
        }
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


//message box
$('#boxclose').click(function () {
    $('#box').animate({
        'top': '-200px'
    }, 500, function () {
        $('#overlay').fadeOut('fast');
    });
});
