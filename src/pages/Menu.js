import React from 'react';
import { MenuList } from "../components/MenuList";
import MenuItem from "../components/MenuItem";


function Menu() {
  return (
    <div className="menu">
      <h3 className="menuTitle">Our Menu</h3>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;