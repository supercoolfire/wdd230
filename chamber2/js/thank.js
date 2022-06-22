const thank = {
    init: () => {

        thank.message();
    },
    message: () => {
        console.log("%c localStorage fname", "color: red", localStorage.getItem("fname"))
        document.getElementById("theName").textContent = ` ${sessionStorage.getItem("fname")}`;

    },
    test1: () => {
        window.onload = () => {
            var url = document.location.href,
            params = url.split('?')[1].split('&')
            // console.log("%c params", "color: red", params);
            let tae={};
            for (var i = 0, l = params.length; i < l; i++) {
                ta = params[i].split("=");
                tae.push(`'${ta[0]}':'${ta[1]}'`)
            }
            
            console.log("%c tae", "color: red", tae)
            
            // document.getElementById('here').innerHTML = data.name;
            
            // document.getElementById('here').innerHTML = document.location.href;
        }
    }
}
thank.init();

