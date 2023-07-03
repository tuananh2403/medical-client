import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action login (Promise pending)
    builder.addCase(actions.getProducts.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(actions.getProducts.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.products = action.payload;
    });

    // Khi thực hiện action login thất bại (Promise rejected)
    builder.addCase(actions.getProducts.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
export const {} = productSlice.actions;
export default productSlice.reducer;
