import React, { Component } from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import SHOP_DATA from './shop-data';
export class Shop extends Component {
    constructor(props){
        super(props);

        this.state={
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
               {
                   collections.map(({id, title, items})=>(
                        <CollectionPreview  key ={id} title={title} previewItems={items} />
                   ))
               }
            </div>
        )
    }
}

export default Shop
