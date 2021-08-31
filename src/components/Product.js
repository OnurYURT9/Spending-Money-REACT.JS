import { useEffect, useState } from "react"

function Product({product,basket,total,money,setbasket}) {
    
    const basketItem = basket.find(item=>item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item=>item.id === product.id)
      //ürün daha önce eklenmis
        if(checkBasket){
            checkBasket.amount +=1
            setbasket ([...basket.filter(item=> item.id != product.id),checkBasket])
        }else{
            setbasket([...basket,{
                id:product.id,
                amount:1
            }])
        }
    }


    const removeBasket = () => {
        const currentBasket = basket.find(item=>item.id === product.id)
        const basketwhitoutcurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -=1
            if(currentBasket.amount === 0){
                setbasket([...basketwhitoutcurrent])
            }else{
                 setbasket ([...basketwhitoutcurrent,currentBasket])
            }
    }


  
    return(
            <>
                <div className="product">
                    <img src={product.image} alt=""></img>
                     <h6>{product.title}</h6>
                     <div className="price">${product.price}</div>
                     <div className="actions">
                         <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
                         <span className="amount">{basketItem && basketItem.amount || 0}</span>
                         <button disabled={total+product.price>money} onClick={addBasket}>Satın Al</button>
                        
                     </div>
                     <style jsx>
                         {
                            `.product{
                                padding:15px;
                                background:#ff;
                                border: 1px solid #ddd;
                                margin-bottom:20px;
                                width: calc(25% - 15px);
                            }
                            .product img { 
                                width:100%;
                            }
                         `}

                     </style>
                </div>
               
            </>
    )
}

export default Product