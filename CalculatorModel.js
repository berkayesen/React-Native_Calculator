export const calculate = (expression) => {
    try {
      return eval(expression);
    } catch (error) {
      return 'Error';
    }
  };
  