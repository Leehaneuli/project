import logo from "./logo.svg";
import "./App.css";
import Book from "./chapter_03/Book.jsx";
import NotificationList from "./chapter_06/NotificationList";
// import Counter from "./Counter.jsx";
import FocusButton from "./FocusButton.jsx";
import Accommodate from "./chapter_07/Accommodate.jsx";
import Tooggle from "./Toggle.jsx";
import MyButton from "./MyButton.jsx";
import LoginControl from "./LoginControl.jsx";
import MainPage from "./MainPage.jsx";
import LandingPage from "./chapter_09/LandingPage.jsx";
import NumberList from "./NumberList.jsx";
import NameForm from "./NameForm.jsx";
import SignUp from "./chapter_11/SignUp.jsx";
import BoilingVerdict from "./BoilingVerdict.jsx";

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      <BoilingVerdict celsius="120" />
    </div>
  );
}

export default App;
