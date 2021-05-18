const throttle = (callback: any, ms: number) => {
  let timer: NodeJS.Timeout | null = null;
  return (...e: any) => {
    if (timer === null) {
      timer = setTimeout(() => {
        timer = null;
        callback(...e);
      }, ms);
    }
  };
};

export default throttle;
