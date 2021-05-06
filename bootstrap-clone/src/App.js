import {Component} from 'react'
import './App.css';
import NavMenu from './components/NavMenu'

class App extends Component {
  constructor(){
    super()

    this.state={
      dropdown: false
    }
  }

  toggleDropdown= () => {
    this.setState({dropdown: !this.state.dropdown})
  }
  
  render() {
    return(
      <div className="App">
      <header id="header" className="flex">
        <NavMenu toggleDropdownFn={this.toggleDropdown}/>
      </header>
      
      <main id="main" className={`${this.state.dropdown?'dropdown':''}`}></main>

    </div>
    )
  }
}

export default App;
