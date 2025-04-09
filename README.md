## ⚙️ RTK Query Setup

**Project structure (inside `src/`):**

```
src/
├── app/
│   └── store.js
└── features/
    └── someFeature/
        └── someFeatureApi.js
```

---

## 🧱 Install Required Packages

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 🧠 store.js (inside `app/`)

```js
import { configureStore } from "@reduxjs/toolkit";
import { someFeatureApi } from "../features/someFeature/someFeatureApi";

export const store = configureStore({
    reducer: {
        someFeatureApi: someFeatureApi.reducer, // Manually named reducerPath
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(someFeatureApi.middleware),
});
```

---

## 🌍 API Slice (inside `features/feature/`)

```js
// someFeatureApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const someFeatureApi = createApi({
    reducerPath: "someFeatureApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://example.com/api/" }),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => "items",
        }),
        addItem: builder.mutation({
            query: (data) => ({
                url: "items",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetItemsQuery, useAddItemMutation } = someFeatureApi;
```

---

## 🧩 Wrap App with Provider

```js
import { Provider } from "react-redux";
import { store } from "./app/store";

<Provider store={store}>
    <App />
</Provider>;
```

For **Next.js**, use `_app.js`.

---

## 📦 Usage Example

```js
const { data, error, isLoading } = useGetItemsQuery();

const [addItem] = useAddItemMutation();
const handleSubmit = async () => {
    await addItem({ title: "Sample" });
};
```
