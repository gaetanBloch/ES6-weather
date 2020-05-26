class Http {
  static fetchData = async (url) => {

    const errorMessage = 'Something went wrong';

    let responseData;
    try {
      const response = await fetch(url);
      responseData = await response.json();
    } catch (error) {
      throw new Error(errorMessage);
    }
    if (responseData.cod === 200) {
      return responseData;
    } else {
      throw new Error(errorMessage);
    }
  };
}

export default Http;
