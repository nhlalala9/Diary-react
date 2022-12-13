
import './App.css';
import DiaryForm from './components/DiaryForm';
import DiaryItem from './components/DiaryItem';
// import { persistor} from './redux/store'
// import persistor from "./redux/store"
// import store from "./redux/store"
// import {Provider} from "react-redux"
// import {PersistGate} from 'redux-persist/integration/react'
import Main from "./container/Main"

function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <Main />
    //   </PersistGate>
    // </Provider>
    <div className="container">
      <Main/>
      <DiaryForm/>
      <DiaryItem/>

    </div>
  );
}

export default App;
