import React, { Component } from "react";
import { observer } from "mobx-react";

import { withNavigation } from "react-navigation";

// NativeBase Components
import { List, Content } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";
import CartIcon from "../CartIcon"

// Data
import cafes from "../../data/cafes";

const CoffeeList = () => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

// export default observer(CoffeeList);

export default (CoffeeList);

CoffeeList.navigationOptions = () => {
  const myTitle = "Coffee List"
  return ({
    title: myTitle,
    headerLeft: null,
    headerRight: <CartIcon />,

  })

}

