var mailContent;
var filename;
$(document).ready(function(){
        $('#send-to').val('Click any volunteer');
        $("input[name='volunteers']").change(function() {
                    if($(this).val() ==="volunteer-1")
                        $("#send-to").val('jn.ayush@gmail.com');
                    else if($(this).val()==="volunteer-2")
                        $("#send-to").val('sajan@emailaddress.com');
                    else if($(this).val()==="volunteer-3")
                        $("#send-to").val("vipulsharma20@gmail.com");
            });
        $("#select").change(function() {
            filename=$(this).val();
            $.ajax({
                url: '/letter-templates/'+filename+'.txt',
                async: false,
                dataType: 'text',
                success: function(data,textStatus,jqXHR){
                    
                    mailContent = data;
                    mailContent+=$("#inputName").val();
                    mailContent+='\n';
                    mailContent+=$("#enrollment-number").val();
                    mailContent+='\n';
                    mailContent+=$("#inputEmail").val();
                    console.log(mailContent);
                }
            })
            .done(function() {
                $("#textArea").val(mailContent);
                $("#subject").val(filename);
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
        });
})