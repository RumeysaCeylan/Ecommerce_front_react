import React from "react";

export default class SelectComponent extends React.Component{
    constructor(props){
        super(props);
        this.productChanged=this.productChanged.bind(this)
        this.products=[
            {id:301,name:"dizüstü",price:2350},
            {id:302,name:"masaüstü",price:4000}
           
        ] 
        const currentProductId=302;
        this.state={
                currentProductId:currentProductId,
                currentProduct: this.products.find(p=>p.id===currentProductId)
            }
    }
    productChanged(event){
        const currentProductId =Number(event.target.value);
        if(currentProductId===0){
            this.setState({
            currentProductId:currentProductId,
            currentProduct: this.products.find(p=>p.id===currentProductId)
        })
        }
      
            
          return;
        
    }
    save(event){
        event.preventDefault();
        if(this.state.currentProductId!==0){
            alert(`saklanıyor ${this.state.currentProduct.name}`);
        }else{
            alert(`boş`);
        }
    }
    render(){
        return(
            <>
                <h3>
                    seçim sınıf bileseni</h3>
                    seçilen : {this.state.currentProductId}
                    seçilen öz: {this.state.currentProduct.id}{' '}
                    {this.state.currentProduct.name}{' '}
                    {this.state.currentProduct.price}{' '}
                    <form onSubmit={this.save}>
                        ürün seç : 
                        <select value={this.state.currentProductId}
                        onChange={this.productChanged}
                        >
                            <option key={0} value={0}>
                                ---seçiniz
                            </option>
                            {this.products.map(product=>
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            )}
                        </select>
                        <input type="submit" value="sakla"/>
                    </form>
                
            </>
        )
    }

}