function msg() {
    const quotes = [
        {
            quote: "loremaaaaaaaaaaaadddddddddfffffffffffdasdfsf"

        },
        {
            quote: "bbbb"
        }
    ];

    const button = document.getElementById("btnMsg");

    button.addEventListener("click", function() {
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);
    
       document.getElementById("message").textContent = quotes[random].quote;
        // document.querySelector(".author").textContent = quotes[random].author;
    });
};