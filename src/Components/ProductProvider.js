import React, {Component} from "react";
import {storeProducts, detailProducts} from "../data";


const ProductContext = React.createContext;
//Provider
//Consumer

 class ProductProvider extends Component {
     state= {
         products: storeProducts,
         detailProducts: detailProducts
          };
     handleDetail= () =>{
         console.log("hello from detail")
     };
     addToCart= () =>{
         console.log("hello from detail")
     };
    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }

}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};