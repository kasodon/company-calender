const addDays = async (date, period) => {
    await date.setDate(date.getDate() + period);
  }


  module.exports = {
    addDays
};