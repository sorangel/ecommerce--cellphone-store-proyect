import React,{Component} from "react";
import {storeProducts, detailProducts} from "./data";


const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state= {
        products: [],
        detailProducts: detailProducts
    };
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let temProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            temProducts = [...temProducts,singleItem];

        });
        this.setState(() => {
            return{products: temProducts}
        })
    };
    handleDetail= () =>{
        console.log("hello from detail")
    };
    addToCart= () =>{
        console.log("hello from add to cart");
    };


    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}
            > <button onClick={this.tester}>test </button>
                {this.props.children}
            </ProductContext.Provider>
        );
    }

}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};