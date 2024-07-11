import React, { createContext, useContext, useState } from "react";
const context = createContext();

const Usecontext = () => {
  const [user] = useState("Abinesh");
  return (
    <>
      <context.Provider value={{ user }}>
        <Component1 />
      </context.Provider>
    </>
  );
};

function Component1() {
  return (
    <>
      <h3> Component1</h3>
      <Component2 />
    </>
  );
}
function Component2() {
  return (
    <>
      <h3> Component2</h3>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h3> Component3</h3>
      <Component4 />
    </>
  );
}
function Component4() {
  const { user } = useContext(context);
  return (
    <>
      <h3> Component4</h3>
      <h5> {`UserName ${user}`}</h5>
    </>
  );
}

export default Usecontext;
