import './Connect.css';
import companyLogo from './images/connect-image.png'
import ConHeader from './ConHeader'

const Connect = () => (
   <div className="connect">
      <ConHeader />    
      <div className="container">
         <div className="connect-inner">          
            <div className="connect-text-inner">
               <div className="connect-form">
               <p className="connect-text">
                  Եթե ունեք հարցեր կարող եք պատվիրել զանգ և մեր մասնագետները կկապնվեն ձեզ հետ
               </p>
                  <form action="">
                     <input type="text" placeholder="Անուն Ազգանուն" />
                     <input type="text" placeholder="Email" />
                     <input type="text" placeholder="+374" value=""/>
                     <input type="text" placeholder="Հարմար ժամեր" />
                  </form>
                  <div className="call">
                     <a href="#" className="call-btn">Պատվիրել զանգ</a>
                  </div>
               </div>
               <div className="connect-image">
                  <img src={companyLogo} alt="Image"/>
               </div>
            </div>
         </div>
      </div>    
   </div>
)

export default Connect