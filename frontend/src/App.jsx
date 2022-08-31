import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
