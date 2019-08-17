import React from "react"
import ItemList from "../itemList/ItemList";
import Item from "../item/Item";


export default props=> {
    return(
        <section>
            <ItemList component={Item} items={props.friends}/>
        </section>
    )
}