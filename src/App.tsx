import { Provider } from "react-redux";
import { store } from "./models/store";
import "semantic-ui-css/semantic.min.css";
import VaccinationView from "./views/VaccinationView";

const App = () => {
  return (
    <Provider store={store}>
      <VaccinationView />
    </Provider>
  );
};

export default App;
