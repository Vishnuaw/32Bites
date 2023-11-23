import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header 
 *  logo 
 *  Nav-items
 * Body
 * --Search 
 *  Restuarant container
 *  -Restuarant card
 *      -Img
 *      -Name of Res,star rating,cuisine,Delivery time  
 * Footer
 * links
 * copyright
 */
 const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src="https://i.pinimg.com/originals/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );

 }; 

 const RestuarantCard = (props) =>{ 
    console.log(props);
    return(
        <div className="res-card">
            <img  
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbe978c0cb1581d3456551b33499964e"
            />
             <h3>{props.resName}</h3>
             <h4>{props.cuisine} </h4>
             <h6>4.4 stars </h6>
             <h5>delivery time </h5>
        </div>
    );
 };
 const Body = () =>{
    return (
        <div className="body"> 
         <div className="search">Search</div>
          <div className="res-container">
           <RestuarantCard
           resName="Meghana Foods"
           cuisine="Biryani,North Indian,Asian"
           />
           <RestuarantCard resName="KFC" cuisine="Burger, Fastfood"/>
        
         </div>  
        </div>
    )
 } 

 const Applayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>;
 };

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Applayout/>);