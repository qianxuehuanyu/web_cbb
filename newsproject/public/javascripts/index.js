(function () {
    var list = $(".theClass");
    console.log(list);
    list.click(function (event) {
        var content = $(this).find("a.displayNone").first().html();
        console.log(content);
        $.post("./theStudentList", {cid: content}, function (result) {
            console.log(result);
        });
    });
})();