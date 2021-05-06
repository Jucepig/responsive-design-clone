import {Component} from 'react'

class NavMenu extends Component {
  constructor() {
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
      <div className="container flex">
        <div id="title" className="flex">
          <span id="logo">Start Bootstrap</span>
          <img onClick={() => this.toggleDropdown()} src="https://drive.google.com/uc?export=view&id=1pTpM_a03RPdKveixfO7KZuqvEsC7rpEM"id="menu-btn"/>
        </div>
        <nav id="nav" className={`flex ${this.state.dropdown?'dropdown':''}`}>
          <span className="nav-item">services</span>
          <span className="nav-item">portfolio</span>
          <span className="nav-item">about</span>
          <span className="nav-item">team</span>
          <span className="nav-item">contact</span>
        </nav>
      </div>
    )
  }
}

export default NavMenu