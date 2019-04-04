// export const domain = "https://rocky-island-86345.herokuapp.com";
export const domain = "https://snapnseek-api.herokuapp.com";
// export const domain = "http://localhost:3000";

export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const handleJsonResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then(result => {
    throw result;
  });
};
