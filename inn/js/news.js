

const news = {
  init: () => {
    // document.getElementById("newsBody").innerHTML =
    news.fetchNews();
  },
  fetchNews: (e) => {
    const qute = "javascript"
    const today = new Date();
    const url = 'https://newsapi.org/v2/everything?' +
      `q=${qute}&` +
      `from=${today.getFullYear()}-${today.getMonth()}-${today.getDate()}&` +
      'sortBy=popularity&' +
      'apiKey=ce5c003dfc604fcd910e6f45fbfe5dd1';
    // console.log(url)
    // const req = new Request(url);

    fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ce5c003dfc604fcd910e6f45fbfe5dd1")
      .then(resp => {resp.json(); 
        console.log(resp);
      })
      .then(data => {
        console.log(data);
        // for (let i=0; i < data.articles.length; i++) {
        //   document.getElementById("newsBody").innerHTML +=  
        //   "<div style='padding-top: 20px;'><img style='float: left; width: 150px' src="+
        //   data.articles[i].urlToImage+"><h1>"+data.articles[i].title+"</h1>"+data.articles[i].source.name+"<br>"+
        //   data.articles[i].description+"<a href="+data.articles[i].url+" target='_blank'>"+data.articles[i].url+"</a><div>";
        // }
      })
  },
  showNews: (response) => {
    console.log("response: "+response);
    // console.log("showNews: "+e)
  }
}
news.init();