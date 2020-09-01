import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
  Badge,
} from "reactstrap";
import {Link} from "react-router-dom";
import alertify from "alertifyjs";



class CartSummary extends Component {

  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " product has been removed ");

  }

  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Bos</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    const style = {
      float: "right",
    };

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge color="success" style={style}>
                {cartItem.quantity}
              </Badge>
              <Badge color="danger" style={style} onClick={()=>this.removeFromCart(cartItem.product)}>
                X
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to={"/cart"}>Sepete Git</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(
        cartActions.removeFromCart,
        dispatch
      ),

      getProducts: bindActionCreators(cartActions.removeFromCart, dispatch),

    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
