var m = new mandrill.Mandrill('a8015d2dcf0aef6ddc042dda35888bab-us12'); // This will be public
function sendMail(){
    m.messages.send({
        "message": {
            "from_email": "info@code4.nagoya",
            "from_name": "your_name",
            "to":[{"email": "h.aoshima@livlog.jp", "name": "青島"}], // Array of recipients
            "subject": "optional_subject_line",
            "text": "Text to be sent in the body" // Alternatively, use the "html" key to send HTML emails rather than plaintext
        }
    });
}
