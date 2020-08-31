import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";


class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " product has been removed ");

  }

  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Prodcut Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),

      getProducts: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
