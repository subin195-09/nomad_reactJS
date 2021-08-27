import React from "react";


function Food({favorite}) {
  return (<h3>I Like {favorite}</h3>);
}

function App() {
  return (
    <div>
      <h1>
        Hello
      </h1>
      <Food favorite="potato" />
      <Food favorite="milk" />
      <Food favorite="apple" />
      <Food favorite="kimchi" />
      <Food favorite="ice-cream" />
    </div>
  );
}

export default App;
