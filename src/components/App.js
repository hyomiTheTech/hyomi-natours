import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";
import Book from "./Book";
import Footer from "./Footer";
import Popup from "./Popup";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Footer />
      <Popup />
    </>
  );
}

export default App;
