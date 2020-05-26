class Http {
  static fetchData = (url) => {
    return new Promise(((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open('GET', url);
      http.onreadystatechange = () => {
        if (http.readyState === XMLHttpRequest.DONE) {
          if (http.status === 200) {
            const responseData = JSON.parse(http.responseText);
            resolve(responseData);
          } else {
            reject('Something went wrong');
          }
        }
      };
      http.send();
    }));
  };
}

export default Http;
