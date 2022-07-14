import React from "react";
import Card from "./Card";
import Contacts from "./Contacts";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Data from "../data";

function App() {
  return (
    <div>
      <Header />
      {Data.map((item) => (
        <Note title={item.title} content={item.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;

/*
    function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map((data) => (
        <Card
          id={data.id}
          name={data.name}
          src={data.imgURL}
          num={data.phone}
          email={data.email}
        />
      ))}
    </div>
  );
}
*/
