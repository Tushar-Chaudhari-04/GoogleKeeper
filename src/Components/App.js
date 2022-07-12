import React from "react";
import Card from "./Card";
import Contacts from "./Contacts";

function CardDetails(data){
    return <Card
        id={data.id}
        name={data.name}
        src={data.imgURL}
        num={data.phone}
        email={data.email}
      />;
}

function App() {
    return <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(CardDetails)}
    </div>
}

export default App;



/*
function App(){
    return <div>
        <Header />
        <Note />
        <Footer />
    </div>;
}

*/