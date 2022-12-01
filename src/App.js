import logo from './logo.svg';
import './App.css';
import Index from './components/Index';

function App() {
  // Triggers every second
  let xi = 0;
  function changeColor() {
    document.documentElement.style.setProperty('--hue-color', xi);
    xi++;
    if (xi >= 360) {
      xi = 0;  // Reset i to 0 if it exceeds colors length
    }
  }
  setInterval(changeColor, 250);
  return (
    <Index />
  );
}

export default App;
