import React, { Component } from "react";

import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class CartIcon extends Component {

    handlePress = () => {
        return (
            //   navigation.navigate("DetailScreen", { cafeID: cafe.id })
            this.props.navigation.navigate("CoffeeCartScreen")
        )

    };

    render() {
        return (
            <Button transparent onPress={() => this.props.navigation.navigate("CoffeeCartScreen")} >
                <Icon name="shopping-cart" type="FontAwesome5" />
            </Button>
        );
    }

}
export default withNavigation(CartIcon);
