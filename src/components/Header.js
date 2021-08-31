import { useState } from 'react'
import { moneyFomat } from './helpers'

function Header({total,money}) {
    return (
        <>
        
                {total>0 && money-total !== 0 &&(
                      <div className="header">Harcayacak <span>${moneyFomat(money-total)}</span>  paranız kaldı</div>
                )}
               {total === 0 &&(
                  <div className="header"> Harcamak için <span>${moneyFomat(money)}</span>   paranız var </div>
               )}
               {money-total === 0 &&(
                   <div className="header">Paran bitti</div>
               )}
            <style jsx>{`
            .header {
                position:sticky;
                top:0;
                background : linear-gradient(to bottom, green,green);
                height : 60px;
                display: flex;
                aligin-items: center;
                justify-content:center;
                font-size:24px;
                color:white;
            }
            `}
            </style>
        </>
    )
}
export default Header