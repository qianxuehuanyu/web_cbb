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

        var _val = $("#className").val();
        if (_val && _val.trim().length > 0 && _val.length > 0) {
            $.post("./addClass", {classname: _val}, function (result) {
                console.log(result);
                if (result && result.status == 1) {

                } else {
                    alert('添加失败/Failed')
                }
            });
        }
        // $(".flexBox.addClassBox").css('display', 'none')
    }

    function addClassCancel() {
        $("#className").val('');
        $(".flexBox.addClassBox").css('display', 'none')
    }

    window.addNewClass = addNewClass;
    window.addClassCheck = addClassCheck;
    window.addClassCancel = addClassCancel;
})();