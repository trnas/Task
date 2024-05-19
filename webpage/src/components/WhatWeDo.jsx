import React from 'react'
import {
    kitchen,
    bedroom,
    livingRoom,
    office
} from '../assets';
const WHAT_WE_DO = [
  {
    src: kitchen,
    title: "Modular Kitchen",
  },
  {
    src: bedroom,
    title: "Bedroom",
  },
  {
    src: livingRoom,
    title: "Living Room",
  },
  {
    src: office,
    title: "Home Office",
  },
];
function WhatWeDo() {
  return (
    <>
      <section id="table2">
        <h1>What we do ?</h1>
        <ul>
          {WHAT_WE_DO.map((item, idx) => (
            <>
              <li>
                <img src={item.src} />
                <h3>{item.title}</h3>
              </li>
            </>
          ))}
        </ul>
      </section>
      <div className="para hidemob">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla
        </p>
      </div>
    </>
  );
}

export default WhatWeDo