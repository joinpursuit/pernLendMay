export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://immense-beyond-93443.herokuapp.com";
};
