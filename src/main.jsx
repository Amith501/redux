import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Correct import for Provider
import App from "./App.jsx";
import { store } from "./store/Store.counter.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
