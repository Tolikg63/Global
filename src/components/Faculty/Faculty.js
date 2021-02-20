import './Faculty.css';

const Faculty = () => (
   <div className="faculties">
      <div className="faculty-top">
         <div className="container">
            <div className="faculty-top-inner">
               <h2 className="faculty-title">Ֆակուլտետներ</h2>
               <div className="faculty-inner-text">
                  <div className="faculty-text">
                     <p className="top_text">Մենք կօգնենք ձեզ</p>
                     <p className="bottom_text">ընտրել ձեր ապագա մասնագիտությունը</p>
                  </div>
                  <div className="faculty-link">
                     <a href="#" className="faculty-link-item">Պատվիրել խորհրդատվություն</a>
                  </div>
               </div>
               <div className="faculty-menu">
                  <ul className="faculty-menu-list">
                     <li className="menu-items">
                        <a href="#" className="faculty-menu-link active-link">Ֆակուլտետներ</a>
                     </li>
                     <li className="menu-items">
                        <a href="#" className="faculty-menu-link">Բոլոր դասընթացները</a>
                     </li>
                     <li className="menu-items">
                        <a href="#" className="faculty-menu-link">Թեստեր</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>     
   </div>
)

export default Faculty