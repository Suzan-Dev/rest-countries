function createDebounce() {
  let timeout = null;
  return function(fnc, delayMs) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs || 500);
  };
}

const debounce = createDebounce();

export default debounce;
