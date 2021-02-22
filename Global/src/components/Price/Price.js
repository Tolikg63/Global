import './Price.css';

const Price = () => (
   <div className="prices">
      <div className="container">
         <div className="price-title">
            Դասընթացների արժեքը
         </div>
         <div className="pricen"> 
            <h2 className="current-price">240 000դր</h2>
            <h2 className="old-price">265 000</h2>
         </div>  
         <div className="month-price">
            <h2>30 000դր</h2>
            <p>Ամսեկան վճարման դեպքում</p>
         </div>
         <div className="pay">
            <ul>
               <li className="pay-item">
                  <a href="#" className="payment-method border-gradient">Վճարել քարտով</a>
               </li>
               <li className="pay-item">
                  <a href="#" className="payment-method border-gradient">Վճարել կանխիկ</a>
               </li>
            </ul>
         </div>
      </div>
   </div>
)

export default Price