export const total = (store) => store.dataResaults;
export const totalResaults = (store) => total(store).reduce((acc, el) => acc + el.result, 0);