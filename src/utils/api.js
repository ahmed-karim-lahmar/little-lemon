const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "updateTimes":
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

const initializeTimes = () => {
  const date = new Date();
  const data = fetchAPI(date);
  return data;
};

export { fetchAPI, submitAPI, updateTimes, initializeTimes };
