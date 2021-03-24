// First sample React app file with a variety of ways of displaying things
// Keeping this file as a scratch note and not best practices

import logo from './logo.svg';
import './App.css';

// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

function App() {
  console.log('Hello from Abdullah')

  const now = new Date()
  const a = 10
  const b = 20

  const name = 'Peter'
  const age = 10

  const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello world, it is {now.toString()}</p>
      
        <p>
        {a} plus {b} is {a + b}
        </p>
        <div>
          <h1>Greetings</h1>
          <Hello name="Abdullah" age="30" />
          <Hello name="Layla" age="20" />
          <Hello name="Belal" age="25" />

          <Hello name="Maya" age={26 + 10} />
          <Hello name={name} age={age} />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
