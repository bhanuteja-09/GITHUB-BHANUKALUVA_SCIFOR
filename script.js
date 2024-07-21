function f1() {
    fetch('https://dummyjson.com/test')
      .then((res) => {
        return res.json();
      })
         .then((data) => {
        // console.log(data);
      })
      
  }
  