let button = document.getElementById('btnCount');
let clear = document.getElementById('btnClear');

button.addEventListener('click', function() {
    let word = document.getElementById("txtInput").value;
    let count = 0;
    let output = document.getElementById("op");

    if(word.length <= 0)
    {
        count = 0;
    }
    else
    {   
        count = 1;

        for(var i = 0; i <= word.length; i++)
        {
            if(word.charAt(i) == ' ')
            {
                count++;
            }
        }
    }

    output.innerHTML = `${count}  words.`
});


clear.addEventListener('click', function()
{
    document.getElementById("txtInput").value = "";
    document.getElementById("op").innerHTML = "";
});