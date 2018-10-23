export const total = (store) => store.dataResults;
export const massLenght = (store) => total(store).length;
export const totalResults = (store) => total(store).reduce((acc, el) => Math.round((acc + el.corAnswers/massLenght(store))), 0);
export const percentResults = (store) => total(store).reduce((acc, el) => Math.round((acc + parseFloat(el.success)/massLenght(store))), 0);