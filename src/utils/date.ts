export const getAge = (birthday: string) => {
  const [y, m, d] = birthday.split(/[- .]/).map((b) => parseInt(b));
  if (m < 1 || m > 12 || d < 1 || d > 31) {
    throw new Error('올바르지 않은 날짜');
  }
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const age_ko = year - y + 1;
  let temp = 2;
  if (month > m || (month === m && day >= d)) {
    temp = 1;
  }
  const age = age_ko - temp;

  return { age_ko, age };
};

const Data = {
  getAge,
};

export default Data;
