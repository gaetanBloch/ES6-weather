class Http {
  static fetchData = (url) => {

    const errorMessage = 'Something went wrong';

    return new Promise(((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(responseData => {
          if(responseData.cod === 200) {
            resolve(responseData);
          } else {
            reject(errorMessage);
          }
        })
        .catch(() => reject(errorMessage));
    }));
  };
}

export default Http;
