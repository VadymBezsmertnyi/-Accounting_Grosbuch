const send = document.querySelector('#send');

send.addEventListener('click', () =>{
    $(document).ready(function() {

        $(".result").load("/php/post.php");
    
    });
});

