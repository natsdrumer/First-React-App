
import './App.css';
import Button from './Components/Button'
import Input from './Components/Input'
import Label from './Components/Label'

function Login(){
  console.log('clicked')
}

function App() {
  return (
    <div className="App">
      <Button name='Login'
      color='red'
      size='big'
      handleOnClick={Login}
      />
      <Label
      name = 'name'
      color = 'black'
      />
      <Input
      type='text'
      id='name'
      size='big'
      />
    </div>
  );
}

export default App;
