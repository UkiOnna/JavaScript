//let url="http://test11.avaddonval.kz/create"
//let url2="http://test11.avaddonval.kz/all"
//
//$(document).ready(function () {
//
//    //$.get(url,function(response){
//    //	let news=response
//    //	
//    //	for( var i =0;i<news.length;i++){
//    //		$('body').append('<h1>' + news[i].header +'</h1>');
//    //		$('body').append( news[i].text);
//    //	}
//
//    //})
//    $.get(url2, function (response) {
//        let news = response
//        for (var i = 0; i < news.length; i++) {
//            $('body').append('<h1>' + news[i].header + '</h1>');
//            $('body').append(news[i].text);
//            $('body').append('<br><button class=' + '"deleteId"' + 'data-id=' + news[i].id + ">Delete</button>");
//        }
//
//        $('.deleteId').click(function () {
//            news_id = $(this).data('id')
//            console.log(news_id)
//            $.ajax({
//                url: 'http://test11.avaddonval.kz/' + 'delete/' + news_id,
//                type: 'GET',
//                success: function (result) {
//                    window.location.reload()
//                }
//            });
//        })
//    })
//
//
//    $("#button-1").click(function (e) {
//        $.post(url, {
//            header: $('#header').val(),
//            text: $('#text').val()
//        },
//            function (res) {
//                window.location.reload()
//            })
//    });
//})




