import logo from './logo.svg';
import './App.css';
import { Trans } from 'react-i18next';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <Trans i18nKey="edit_and_reload">Edit <code>src/App.js</code> and save to reload.</Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Trans i18nKey="learn_react">Learn React</Trans>
        </a>
      </header>
    </div>
  );
}

export default App;
