import React from 'react';
import './Roadmap.css';
import arrowDownRight from '../../assets/icons/arrow-down-right.svg'
import arrowDownLeft from '../../assets/icons/arrow-down-left.svg'
const Roadmap = ({props}) => {
    return ( 
        <div>
            <section className="timelines">
                <ul >
                    {
                        props.roadmap.map(data=>{

                            if(data.number%2 != 0){
                                return <li>
                                    <div>
                                        <h2>{data.title}</h2>
                                        <img src={arrowDownLeft} alt="" />
                                    </div>
                                </li>
                            }else{
                                return <li>
                                        <div>
                                            <img src={arrowDownRight} alt="" />
                                            <h2>{data.title}</h2>
                                        </div>
                                    </li>
                            }
                           
                        })
                    }
                </ul>
            </section>
        </div>
    );
}
     
export default Roadmap;