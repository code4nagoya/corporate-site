$(document).ready(function(){


  $('#fullpage').fullpage({
    sectionsColor: ['#000', '#f6ab00', '#7baabe', '#ccddff', '#4bbfc3'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',

    afterLoad: function(anchorLink, index){
        var loadedSection = $(this);
        //using index
        if (index == 1) {
            var video = document.querySelector('video');
            video.play();
        }
      }
  });

  var video = document.querySelector('video');
  video.addEventListener('loadeddata', function(){
    video.play();
  });


  //update this with your $form selector
  var form_id = "jquery_form";

  var data = {
    "access_token": "ny28r975rcz469hmmx98l9tl"
  };

  function onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
  }

  function onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
  }

  var sendButton = $("#" + form_id + " [name='send']");

  function send() {
    sendButton.val('Sending…');
    sendButton.prop('disabled',true);

    var yourName = $("#" + form_id + " [name='your-name']").val();
    var address = $("#" + form_id + " [name='email']").val();
    var subject = $("#" + form_id + " [name='subject']").val();
    var comment = $("#" + form_id + " [name='comment']").val();
    var text = "差出人: " + yourName + "<" + address + ">\n"
             + "タイトル:" + subject + "\n"
             + "\n"
             + "メッセージ本文:" + "\n"
             + comment;
    data['subject'] = subject;
    data['text'] = text;

    $.post('https://postmail.invotes.com/send',
      data,
      onSuccess
    ).fail(onError);

    return false;
  }

  sendButton.on('click', send);

  var $form = $("#" + form_id);
  $form.submit(function( event ) {
    event.preventDefault();
  });
});
