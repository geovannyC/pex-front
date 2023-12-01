import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "./temporalPubliData/data";
import { titleStyle } from "./temporalPubliData/textStyle";
type TextStyles = {
  title: String;
  font: object;
};
type InitialState = {
  data: Object;
  currentTextView: TextStyles;
  textStyles: Object;
  currentSeason: String;
};

const initialState = {
  data: data,
  currentTextView: {
    title: "",
    font: {
      fontFamily: "Woodman-HeavyPress",
      letterSpacing: "5cqi",
      fontSize: "10cqi",
      marginRight: "-15cqi",
    },
  },
  textStyles: titleStyle,
  currentSeason: "christmas",
} as InitialState;

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    reset: () => initialState,
    setDataPublications: (state, action: PayloadAction<object>) => {
      state.data = action.payload;
    },
    handleChangueCurrentTextView: (state, action) => {
      state.currentTextView = action.payload;
    },
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    // decrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value -= action.payload;
    // },
  },
});

export const { setDataPublications, handleChangueCurrentTextView } =
  app.actions;
export default app.reducer;
