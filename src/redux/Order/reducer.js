import { createActions, handleActions, combineActions } from 'redux-actions';

const initialState = {
  cost: 800,
  commission: 130,
  child: {
    year: 1,
    month: 3,
  },
  features: ["Есть особые дети", "Есть младенцы", "Только после школы Kidsout"],
  location: "м. Чертановская, Кировоградская 2, 367",
  comment: "Требуется бебиситтер к мальчику",
};

const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});

const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, cost: state.cost + amount };
    }
  },
  initialState
);

export default reducer;
