$(document).ready(function() {

    $("input[name='volunteers']").change(function() {

        if ($(this).val() === "volunteer-1") {
            $("#send-to").val('volunteer-1');
        } else if ($(this).val() === "volunteer-2") {
            $("#send-to").val('volunteer-2');
        } else if ($(this).val() === "volunteer-3") {
            $("#send-to").val("volunteer-3");
        }

    });

    $("#select").change(function() {

        var filename = $(this).val();

        $.ajax({
            url: '/letter-templates/' + filename + '.txt',
            async: false,
            dataType: 'text'
        }).done(function(data) {
            data += $("#inputName").val();
            data += '\n';
            data += $("#enrollment-number").val();
            data += '\n';
            data += $("#inputEmail").val();
            console.log(data);
            $("#textArea").val(data);
            $("#subject").val(filename);
            console.log("success");
        }).fail(function() {
            console.log("error");
        }).always(function() {
            console.log("complete");
        });

    });
})