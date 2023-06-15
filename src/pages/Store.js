import React from "react";
import tshirt1 from "../images/tshirt1.jpg"

export default function Store() {
  const itemsObj = getItems()
  return (
    <div className="store">
      <h2>Store</h2>
      <div className="items">
        {itemsObj.map((item) => 
          <Item 
            key={item.id}
            image={item.url}
            cost={item.cost}
            sizes={item.sizes}
            index={item.id}
          />
        )}
      </div>
    </div>
  )
}

const Item = ({index, image, cost, sizes}) => {
  return (
    <div className="item">
      <img src={image} alt={"Item " + index} />
      <p>${cost}</p>
      <p>Available: {sizes}</p>
    </div>
  )
}

const getItems = () => {
  const items = [
    {id:1, url: require('../images/tshirt1.jpg'), cost: 30, sizes:"S/M/L"},
    {id:2, url: require('../images/tshirt2.jpg'), cost: 40, sizes:"M/L"},
    {id:3, url: require('../images/tshirt3.jpg'), cost: 35, sizes:"S/M"},
    {id:4, url: require('../images/tshirt4.jpg'), cost: 50, sizes:"S/L"},
    {id:5, url: require('../images/tshirt5.jpg'), cost: 25, sizes:"S/M/L"},
    {id:6, url: require('../images/tshirt6.jpg'), cost: 45, sizes:"S/M/L"}
  ]

  return items
}
