import React from 'react';
import './Benefits.css';
import { imagesLanding } from '../../assets/images/landing/imagesLanding';
import eyeOff from '../../assets/icons/eye-off-whitw.svg'

const Benefits = ({props}) => {
    return ( 
        <div className='benefits'>
            <div className="benefits--describe">
                <p>{props.Benefits.describe}</p>
            </div>
            <div className="benefits--type">
                {
                    props.Benefits.types.map(data=>{
                        return <div className="benefits--nums">
                            <h2>{data.number}</h2>
                            <div className="benefits--text">
                                <p>{data.describe}</p>
                                <hr />
                            </div>
                    </div>
                    })
                }
                
            </div>
            <div className="befits-card">
                <img src={imagesLanding.cardTwoBenefits} alt="" />
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