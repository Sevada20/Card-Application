import { v4 as uuidv4 } from "uuid";
export const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      return [
        ...state,
        {
          id: uuidv4(),
          randNum: action.payload.randNum,
        },
      ];
    case "deleteItem":
      return state.filter((num) => num.id !== action.payload.id);
    case "sortItem":
      return [...state.sort((a, b) => (a.randNum > b.randNum ? 1 : -1))];
    case "getNumState":
      return [...action.payload.stored];
    default:
      return state;
  }
};
