const thePage = {
    init: () => {
      // initialize variables
      let myDate = new Date();
      let myYear = myDate.getFullYear();
      const fulldate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "full"
      }).format(myDate);
      const dayNumber = myDate.getDay();
      console.log(dayNumber);
  
      thePage.form();

      thePage.footer(myYear);
  
  
    },
    footer: (myYear) => {
      document.getElementById("theYear").textContent = myYear;
      document.querySelector("#lu").textContent = `Last Modification:  ${document.lastModified}`;
    },
    form: () => {
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const male = document.getElementById("email");
        
        fname.addEventListener("change", changing);
        lname.addEventListener("change", changing);
        
        function changing() {
            // console.log(fname.value);
            // console.log(lname.value);
            male.value = `${fname.value}.${lname.value}@snailmail.com`;
        }
    }
    
  }
  thePage.init();