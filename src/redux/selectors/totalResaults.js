export const total = (store) => store.dataResaults;
export const massLenght = (store) => total(store).length;
export const totalResaults = (store) => total(store).reduce((acc, el) => Math.round((acc + el.corAnswers/massLenght(store))), 0);
export const percentResaults = (store) => total(store).reduce((acc, el) => Math.round((acc + parseFloat(el.success)/massLenght(store))), 0);