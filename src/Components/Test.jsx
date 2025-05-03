import React from "react";

const Test = ({ item }) => {
  return (
    <div>
      <ul>
        {item.slice(0, 9).map((item) => (
          <li key={item.id}>
            {item.title}
            {item.id}
            <img src={item.url} width="100px" height="200px" />
            {Array(4).fill(0).map((_,index)=>"⭐")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
