import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/pages/defaulComponents.styles.css"

const DefaultComponent = () => {
   const navigate = useNavigate();
  return <div className="bg-inicio"> 
            <div className="bg-filter">
               <section className="info">
                  <h2>Welcome to bizz jewelry</h2>  
                  <p>click on the following button to access the store</p> 
                  <button onClick={() => navigate("/login")}>
                    <p>log in</p> 
                  </button>
               </section>
               
            </div>
         </div>;
};

export default DefaultComponent;
