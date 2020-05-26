class Http {
  static fetchData = async (url) => {

    const errorMessage = 'Something went wrong';
    const throwError = () => {
      throw new Error(errorMessage);
    };

    let responseData;
    try {
      const response = await fetch(url);
      responseData = await response.json();
    } catch (error) {
      throwError();
    }
    if (responseData.cod === 200) {
      return responseData;
    } else {
      throwError();
    }
  };
}

export default Http;
