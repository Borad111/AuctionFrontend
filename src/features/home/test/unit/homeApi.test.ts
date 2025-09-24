// src/api/homeApi.test.ts
import { configureStore } from '@reduxjs/toolkit';
import { homeApi } from '../../api/homeApi';

// Mock server setup ke liye MSW (Mock Service Worker) use kar sakte hain
describe('homeApi', () => {
  it('transforms categories response correctly', async () => {
    const store = configureStore({
      reducer: {
        [homeApi.reducerPath]: homeApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(homeApi.middleware),
    });

    // Wait for API call to complete
    await store.dispatch(homeApi.endpoints.getCategories.initiate());

    // Check if the response is correctly transformed
    // (Yahan aapko mock server setup karna hoga)
  });
});