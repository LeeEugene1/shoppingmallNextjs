import React from 'react'

function Card({ item }) {
  console.log(item);
  // shoesList.map((item) => console.log(item));
  return (
    <div className="col-md-4">
      <h5>{item.title}</h5>
      {/* <p>{data[0].content}</p> */}
      <p>{item.price}</p>
    </div>
  );
}

export default Card

