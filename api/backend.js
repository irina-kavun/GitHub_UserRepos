export const get = (path, queryString) => {
 return rest('GET', path, queryString, undefined);
};

export const post = (path, body, queryString) => {
  return rest ('POST', path, queryString, body);
};

const rest = (method, path, queryString, body) => {
  const url = `https://api.github.com${path}`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(handleErrors)
      .then(handleSuccessResponse)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response;
};

const handleSuccessResponse = response => {
  return response.json()
};

