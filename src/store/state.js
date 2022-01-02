let defaultCity = "Hobart";
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {}

export default {
  city: defaultCity
};
