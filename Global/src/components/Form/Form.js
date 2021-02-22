import './Form.css';
import Price from '../Price/Price'

const Form = () => {
   return (
      <div className="form">
         <div className="container">
            <h1 className="form__title">Գրանցվիր հիմա</h1>
            <form action="">
               <label className="formtitle" htmlFor="name">Անուն Ազգանուն Հայրանուն</label>
               <input type="text" id="name" className="field" placeholder="Ձեր Անունը Ազգանունը և Հայրանունը"/>
               <label className="formtitle" htmlFor="email">E-mail</label>
               <input type="text" id="email" className="field" placeholder="Ձեր E-mail-ը"/>
               <label className="formtitle" htmlFor="tel">Հեռախոսահամար </label>
               <input type="text" id="tel" className="field" placeholder="Ձեր Հեռախոսահամար"/>
            </form>
            <div className="trainings">
            <p className="training-title">Դասընթացների անցկացման տարբերակները</p>
            <form className="training-form" action="">
               <ul className="training__list">
                  <li className="training__item first-item">
                     <input className="input__radio" type="radio" id="input1" value="option1" name="Myradio"/>
                     <label className="input__label first-item input__label-flex" htmlFor="input1">Խմբային դասընթացներ</label>              
                  </li>
                  <li className="training__item first-item">
                     <input className="input__radio" type="radio" id="input2" value="option2"  name="Myradio"/>
                     <label className="input__label first-item input__label-flex" htmlFor="input2">Անհատական դասընթացներ</label>                   
                  </li>
               </ul>
               <ul className="training__list training__list-second">
                  <div className="flex-wrapper">
                     <li className="training__item block-element-1">
                        <div className="flex">
                           <input className="input__radio" type="radio" id="input3" value="option1" name="Myradio2"/>
                           <label className="input__label" htmlFor="input3">Վիդեո դասեր</label>
                        </div>
                     </li>
                     <li className="training__item block-element-2">
                        <input className="input__radio" type="radio" id="input4" value="option2" name="Myradio2"/>
                        <label className="input__label" htmlFor="input4">Դասասենյակում</label>   
                     </li>
                     </div>
                  <li className="training__item block-element-3">
                     <input className="input__radio" type="radio" id="input5" value="option3" name="Myradio2"/>
                     <label className="input__label input__label-flex" htmlFor="input5">Ուղիղ միացմամբ</label>   
                  </li>
               </ul>
               <ul className="training__list training__list-third">
                  
                     <li className="training__item block-element-1">
                        <input className="input__radio" type="radio" id="input6" value="option1" name="Myradio3"/>
                        <label className="input__label" htmlFor="input6">Հայերեն</label>   
                     </li>
                     <li className="training__item block-element-2">
                        <input className="input__radio" type="radio" id="input7" value="option2" name="Myradio3"/>
                        <label className="input__label" htmlFor="input7">Ռուսերեն</label>   
                        </li>
                   
                  <li className="training__item block-element-3">
                     <input className="input__radio" type="radio" id="input8" value="option3" name="Myradio3"/>
                     <label className="input__label input__label-flex" htmlFor="input8">Անգլերեն</label>                  
                  </li>
               </ul>
            </form>
            </div>
         </div>
         <Price />        
      </div>
   )
}

export default Form