export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "https://powerful-depths-91395.herokuapp.com"
    : "http://localhost:3333 ";
};
