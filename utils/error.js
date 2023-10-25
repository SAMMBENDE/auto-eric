const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

export { getError };

/* the above  is helpful for handling errors in an HTTP request 
when you want to extract and display error messages to the user 
or log them for debugging purposes.*/
