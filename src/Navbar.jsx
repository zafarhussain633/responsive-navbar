import React,{useState} from 'react';

function Navbar(){
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligh " >
        <div className="container-fluid d-flex" id="nav-menu">
          <HamburgerButton />
          <Navbarlogo />
          <Rightnav />
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              {/* drop down links for desktop */}
              <li className="nav-item dropdown">
                <a className="nav-link text-white bold dropdown-toggle" href="#"  id="navbarDropdownMenuLink1" role="button"  data-bs-toggle="dropdown" aria-expanded="false">DESKTOP</a>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink1">
                  <RightDropDown />
                  <li><a className="dropdown-item text-white p-3" href="#">Workstation Desktop<i className="fa fa-caret-right rightArrow" aria-hidden="true"></i></a></li>
                  <li><a className="dropdown-item text-white p-3" href="#">Goverment & Corperate</a></li>
                </ul>
              </li>
              {/* drop down links for desktop ends here */}

              <Dropdown 
               title ="LAPTOP"
               link1="Gaming Laptop"
               link2="Workstation Laptop"
               link3="Goverment & Coporate"
               id ="laptopDropdown"
              />


              <li className="nav-item">
                <a className="nav-link text-white" href="">ACCESSORIES</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-warning" href="#">SPECIAL OFFER</a>
             </li>

              <Dropdown 
              title="REVIEWS" 
              link1="NEWS" 
              link2="TESTIMONIALS"
              id="dropdownmenurReviews"
              />

              <Dropdown 
              title="MORE" 
              link1="customre design" 
              link2="blog"
              link3="support"
              id="dropdownmenuMore"
              />
            </ul>
          </div>
        </div>
      </nav>
    )
}





function Navbarlogo(){
    return(
      <div id="navbar" ><a className="navbar-brand" href="#">
              <img src="origin-logo.svg" id="origin-logo" alt="logo" width="150px" /></a> 
              <img src="center-logo.svg" id="center-logo" alt="logo" width="40px" />
      </div>
    )
  }
  
  
  function HamburgerButton(){
    return (
      <button className="navbar-toggler " id="hamburger-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars text-white"></i>
            </button>
    )
  }
  
  function Rightnav(){
    return ( 
      <div className="d-flex text-white" id="rightnav">
        <div><i className="fas fa-search"></i></div>
        <div><i className="fas fa-user "></i> <i id="sing-in">Sign In</i></div>
        <div><i className="fas fa-shopping-cart"></i></div>
        
      </div>
    )
  
  }
  
  function Header(){
    return(
      <header>
      <div className="header-body1">
        <div><i className="fas fa-shield-alt"/>24*7 lifetime support </div>
        <div><i className="fa fas fa-phone"/> +91-9876543210 (US & CA)</div>
      </div>
      <div className ="header-body2">
        <div> <i className="far fa-comment"/> chat offline</div>
        <div>contact</div>
      </div>
    </header>
    )
  }
  

  function Dropdown({title,link1,link2,link3,id}){
    return(
      <li className="nav-item dropdown">
      <a className="nav-link text-white  dropdown-toggle" href="#" id={id} role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {title}
      </a>
      <ul className="dropdown-menu bg-dark" aria-labelledby={id}>
        <li><a className="dropdown-item text-white p-3" href="#">{link1}</a></li>
        <li><a className="dropdown-item text-white p-3" href="#">{link2}</a></li>
        <li><a className="dropdown-item text-white p-3" href="#">{link3}</a></li>
      </ul>
    </li>
    )
  }
  
  
  
  function RightDropDown(){
     const [state, setstate] = useState(true)
  
       function ShowDropdown(){
         setstate(!state)
       }
  
    return(
        <div className="dropdown-item text-white p-3">
          <div className="child-dropdown" onMouseEnter={() => ShowDropdown()} onClick ={()=>setstate(true)}>Gaming Laptop<i className="fa fa-caret-right rightArrow" aria-hidden="true"></i></div>
          <div>
            <ul className={
              state? "child-dropdown-list" : "show-dropdown-list dropdown-menu bg-dark m-0"
            }>
              <li> <a className="dropdown-item text-white p-3" href="#">Compare All</a></li>
              <li> <a className="dropdown-item text-white p-3" href="#">CHRONOS</a></li>
              <li> <a className="dropdown-item text-white p-3" href="#">NEURONS</a></li>
              <li> <a className="dropdown-item text-white p-3" href="#">MILLNNIUM</a></li>
            </ul>
          </div>
          
        </div>
    )
  }


  export {Navbar , Header}