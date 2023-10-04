import './App.css'


const Hello = (props) => {
  const { name, lastname } = props
  return (
    <div>
      <p>Hello {name}, {lastname}</p>
    </div>
  )
}

const App = () => {

return (
  <>
    <h1>Greetings</h1>
    <Hello key="1" name="Nadia" lastname="Ujovich"/>
    <Hello key="2" name="Juan" lastname="Perez"/>
  </>
);
}

export default App
