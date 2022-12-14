import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//In memory cache default parameters are overridden in Apollo, as due to apollo's normalization feature, some of attribute data was being cached incorrectly
const createCache = () =>
  new InMemoryCache({
    typePolicies: {
      AttributeSet: {
        keyFields: false,
      },
    },
  });
export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: createCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);
