import React from 'react'
import {
    calendarIcon,
    FiftyIcon,
    homeIcon,
    certiIcon

} from '../assets'

const INTERIORS = [
  {
    src: calendarIcon,
    title: "50 days or we pay you rent<",
    id: 'calender'
  },
  {
    src: homeIcon,
    title: "1500+ happy customers",
    id: 'houseIcon'
  },
  {
    src: certiIcon,
    title: "300+ design experts",
    id: 'certificate'
  },
];
function Interior() {
  return (
    <>
      <h1 className="title1">Why LAND Interiors</h1>

      <section id="table1">
        <ul>
          {INTERIORS.map((item, idx) => (
            <li>
              <div className="relative">
                <img src={item.src} id={item.id} />
                {idx == 0 && <img src={FiftyIcon} id="calendar-absolute" />}
              </div>

              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}



export default Interior