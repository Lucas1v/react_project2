
import './App.css';
import { Provider } from "react-redux"
import store from "./store.js"
import Reader from "./components/Reader"
import Writer from "./components/Writer"

function App() {
  return (
    <Provider store={store}>
      <div id="mayor">
        <Reader />
        <Writer />
      </div>
    </Provider>
  );
}

export default App;
