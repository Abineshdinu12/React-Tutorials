import React, { useState } from "react";

const PropsDrilling = () => {
  const [user] = useState("Abinesh");
  return (
    <>
      <h3> Example</h3>
      <Component1 user={user} />
    </>
  );
};

function Component1({user}) {
  return (
    <>
      <h3> Component1</h3>
      <Component2 user={user} />
    </>
  );
}

function Component2({user}) {
  return (
    <>
      <h3> Component2</h3>
      <h1>{`Component is ${user}`}</h1>
      <Component3 user={user} />
      
      
    </>
  );
}

function Component3({user}) {
  return (
    <>
      <h3> Component3</h3>
      <Component4 user={user} />
    </>
  );
}

function Component4({user}) {

  return (
    <>
      <h3> Component4</h3>
      <h1>{`user is ${user}`}</h1>
    
    </>
  );
}

export default PropsDrilling;
