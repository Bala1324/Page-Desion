import React from "react";

class Product extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className = "container">
                <table class="table table-bordered" >
                    
                    <tr>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Purchased Date</th>
                    </tr>
                    
                    
                    <tr>
                        <td>lkkhio</td>
                        <td>hkgy</td>
                        <td>hugfy</td>
                    </tr>
                    <tr>
                        <td>kjjb</td>
                        <td>huyfu</td>
                        <td>kjgi</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                </table>
            </div>
        )
    }
}

export default Product;