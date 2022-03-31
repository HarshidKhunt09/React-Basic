// import React, { useState, useEffect } from "react";
// import React from "react";
import './App.css';
// import { Routes, Route } from "react-router-dom";
// import { Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location} from "./pages";
import restaurant from "./Restaurants.jpg";

// const App = () => {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} >
//         <Route path="services" element={<Services />} />
//         <Route path="companyHistory" element={<CompanyHistory />} />
//         <Route path="location" element={<Location />} />
//         </Route>
//         <Route path="/events" element={<Events />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Whoops404 />} />
//       </Routes>
//     </div>
//   );
// }


// const App = ({id}) => {

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//       setLoading(true);
//       fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(response => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//     }, [id]);

//     if(loading) return <h1>Loading...</h1>;
//     if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//     if(!data) return null;

//     if(data){
//       return (
//         <>
//         <h1>{data.name}</h1>
//         <div>{data.email}</div>
//       </>
//       );
//     }

//     return <div>No User</div>
//   }






// const App = () => {

//     const [checked, setChecked] = useState(false);

//     return (
//       <div className="App">
//         <input type="checkbox" value={checked} onChange={() => { setChecked((checked) => !checked)}}/>
//       <p>{checked ? "checked" : "not checked"}</p>
//       </div>
//     );
//   }






// const App = () => {

//   const [emotion, setEmotion] = useState("Happy");
//   const [secondary, setSecondary] = useState("Tired");
  
//   useEffect(() => {
//     console.log(`It's ${emotion} around here!`);
//   },[emotion]);

//   useEffect(() => {
//     console.log(`It's ${secondary} around here!`);
//   },[secondary]);

//   return (
//             <div className="App">
//               <h1>Current emotion is {emotion} and {secondary}</h1>
//               <button onClick={() => { setEmotion("Happy") }}>Happy</button>
//               <button onClick={() => { setSecondary("Crabby") }}>Crabby</button>
//               <button onClick={() => { setEmotion("Frustrate") }}>Frustrate</button>
//               <button onClick={() => { setEmotion("Enthusiastic") }}>Enthusiastic</button>
//             </div>
//             );
// }




// const SecretComponent = () => {

//   return <h1>Super secret information for authorized users only</h1>
// }

// const RegularComponent = () => {

//   return <h1>Everyone can see this component.</h1>
// }

// const App = (props) => {
//     return (
//         <div className="App">
//           {props.authorized ? <SecretComponent /> : <RegularComponent />}
//         </div>
//         );
// }



const Header = (props) => {

  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

const Main = (props) => {

  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurant} height="200" alt='restaurant'/>
      <ul style={{ textAlign:"left", color:"green" }}>
        {props.dishes.map((dish,i) => 
          <li key={i}>{dish}</li>
        )}
      </ul>
    </section>
  );
}

const Footer = (props) => {

  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Pizza",
  "Burger",                    
  "Coffee"
];

const App = () => {
  return (
    <div className="App">
      {
      <>
      <Header name="Cindy" />
      <Main adjective="Amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
      </>
      }
    </div>
  );
}

export default App;
