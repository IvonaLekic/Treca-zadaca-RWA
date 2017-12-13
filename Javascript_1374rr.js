$(document).ready(function()
 {
     $('input[type="button"]').click(function()
    {
        if($('input[type="text"').val()%2==0)
            alert("Matični broj je paran");
        else
            alert("Matični broj je neparan");
    })
})