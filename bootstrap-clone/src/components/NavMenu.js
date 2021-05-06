
function NavMenu (props) {
    return(
      <div className="container flex">
        <div id="title" className="flex">
          <span id="logo">Start Bootstrap</span>
          <img onClick={()=>props.toggleDropdownFn()} src="https://drive.google.com/uc?export=view&id=1pTpM_a03RPdKveixfO7KZuqvEsC7rpEM"id="menu-btn" alt="hamburger-menu"/>
        </div>
        <nav id="nav" className="flex">
          <span className="nav-item">services</span>
          <span className="nav-item">portfolio</span>
          <span className="nav-item">about</span>
          <span className="nav-item">team</span>
          <span className="nav-item">contact</span>
        </nav>
      </div>
    )
  }

export default NavMenu