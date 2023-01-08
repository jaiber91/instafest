import React, { useContext, useEffect } from 'react';
import './Benefits.css';
import { imagesLanding } from '../../assets/images/landing/imagesLanding';
import eyeOff from '../../assets/icons/eye-off-whitw.svg'
import benefits1 from '../../assets/images/landing/benefits1.png'
import benefits2 from '../../assets/images/landing/benefits2.png'
import { providerContext } from '../../context/status';

const Benefits = ({props}) => {
    let {
        translatey,
        setTranslatey
      }= useContext(providerContext);

      useEffect(() => {
        const interval = setInterval(() => {
          if(translatey === true){
            setTranslatey(translatey=false)
          }else{
            setTranslatey(translatey=true)
          }
    
        }, 2000);
        return () => clearInterval(interval);
      }, []);
    return ( 
        <div className='benefits'>
            <div className="benefits--describe">
                <p>{props.Benefits.describe}</p>
            </div>
            <div className="benefits--type">
                <div className="benefits--type-col1">

                {
                    props.Benefits.types.slice(0, 3).map(data=>{
                        return <div className="benefits--nums-col1">
                            <h2>{data.number}</h2>
                            <div className="benefits--text-col1">
                                <p>{data.describe}</p>
                                <hr className='line-col1'/>
                            </div>
                    </div>
                    })
                }
                </div>
                <div className="benefits--type-col2">

                 {
                    props.Benefits.types.slice(3, 6).map(data=>{
                        return <div className="benefits--nums">
                            <h2>{data.number}</h2>
                            <div className="benefits--text">
                                <p>{data.describe}</p>
                                <hr className='lineCol2'/>
                            </div>
                    </div>
                    })
                }
                </div>
            </div>
            <div className="befits-card">
                <img className={translatey ? '' : 'befits-img'} src={benefits1} alt="imagen " />
                <img className={translatey ? 'befits-img' : ''} src={benefits2} alt="imagen " />
                <div className="befits-card-text">
                    <p>{props.text}</p>
                    <div className="describe--btn">
                    <button className='btn'>Explorar 
                        <img src={eyeOff} alt="eye off" />
                    </button>
                </div>
                </div>
            </div>
            <div className="financialPlan">
                <h2>{props.financialPlan.title}</h2>
                <div className="center">
                    <p>{props.financialPlan.text1}</p>
                    <p>{props.financialPlan.text2}</p>
                    <div className="financialPlan-text">
                        <p>{props.financialPlan.text3}</p>
                    </div>
                    <p>{props.financialPlan.text4}</p>
                    <p>{props.financialPlan.text5}</p>
                    <div className="financialPlan-text-hr">
                        <div className="v-lines"></div>
                        <p>{props.financialPlan.text6}</p>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Benefits;