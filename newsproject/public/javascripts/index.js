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

    function addNewClass() {
        $(".flexBox.addClassBox").css('display', 'block')
    }

    function addClassCheck() {
        $(".flexBox.addClassBox").css('display', 'none')
    }

    function addClassCancel() {
        $(".flexBox.addClassBox").css('display', 'none')
    }

    window.addNewClass = addNewClass;
    window.addClassCheck = addClassCheck;
    window.addClassCancel = addClassCancel;
})();