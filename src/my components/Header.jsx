import reactViteLogo from "../assets/react-core-concepts.png";

function Header() {
const readDescriptions = ["Fundemental","Core","Advanced","Expert"];
const generateRandomIndex = () => Math.floor(Math.random() * readDescriptions.length);
  return(
    <header>
    <img src={reactViteLogo} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      let's learn the <strong>{readDescriptions[generateRandomIndex()]}</strong> concepts of React!
    </p>
  </header>
  )
}

export default Header;