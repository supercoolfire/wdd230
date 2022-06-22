const joints = {
    init: () => {
        window.onload = () => {
            sessionStorage.removeItem('fname');
            sessionStorage.removeItem('lname');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('phone');
            sessionStorage.removeItem('position');
            sessionStorage.removeItem('bName');
            sessionStorage.removeItem('description');
            sessionStorage.removeItem('membership');
            sessionStorage.removeItem('formDate');
            sessionStorage.removeItem('fromTtime');
        }
        joints.processing();

    },
    processing: () => {
        var d = new Date();
        var hours = d.getHours();
        var mins = d.getMinutes();
        var seconds = d.getSeconds();
        document.getElementById("formDate").value = d.toDateString();
        document.getElementById("fromTtime").value = `${hours}:${mins}:${seconds}`;
        
        const fname =  document.getElementById("fname");
        fname.addEventListener("keyup", () => {sessionStorage.setItem("fname", fname.value);});
        const lname = document.getElementById("lname");
        lname.addEventListener("keyup", () => {sessionStorage.setItem("lname", lname.value);});
        const email = document.getElementById("email");
        email.addEventListener("keyup", () => {sessionStorage.setItem("email", email.value);});
        const phone = document.getElementById("phone");
        phone.addEventListener("keyup", () => {sessionStorage.setItem("phone", phone.value);});
        const position = document.getElementById("position");
        position.addEventListener("keyup", () => {sessionStorage.setItem("position", joints.raggae(position.value));});
        const bName = document.getElementById("bName");
        bName.addEventListener("keyup", () => {sessionStorage.setItem("bName", bName.value);});
        const description = document.getElementById("description");
        description.addEventListener("keyup", () => {sessionStorage.setItem("description", description.value);});
        

        // const membership = document.querySelectorAll('input[name="membership"]');
        // membership.addEventListener("click", console.log("%c membership:", "color: red", membership.defaultValue));
        
        
        const membership = document.querySelectorAll('input[name="membership"]:checked');
        
        membership.addEventListener("change", () => {
            console.log("%c membership", "color: red", membership.value);
            sessionStorage.setItem("membership", membership.value);
        });
        
        
        const formDate = document.getElementById("formDate");
        formDate.addEventListener("keyup", () => {sessionStorage.setItem("formDate", d.toDateString());});
        const fromTtime = document.getElementById("fromTtime");
        fromTtime.addEventListener("keyup", () => {sessionStorage.setItem("fromTtime", `${hours}:${mins}:${seconds}`)});
    },
    raggae: () => {
        // console.log("%c position.value ", "color:red", position.value)
        const err = document.getElementById("errorMessage");
        let pattern = /^[a-zA-Z -]+$/;
        let matchStcks = position.value.match(pattern)
        // console.log("%c matchStcks ", "color:red", matchStcks)
        if (!matchStcks || position.value.length > 7) {
            err.innerText = `Minimum of 7 characters, alphabet, hyphens, and spaces only. Characters(${position.value.length})`;
        } else {
            err.innerText = '';
        }
        return position.value
    }
}
joints.init();