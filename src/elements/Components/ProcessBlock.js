import React, {Component} from 'react';

import Document from '../styles/img/process/document.svg';
import Develop from '../styles/img/process/develop.svg';
import Design from '../styles/img/process/design.svg';
import Idea from '../styles/img/process/idea.svg';
import Seo from '../styles/img/process/seo.svg';
import Start from '../styles/img/process/start.svg';
import Test from '../styles/img/process/test.svg';


class ProcessBlock extends Component{



    componentDidMount(){
        let c = this.canvas.getContext('2d');

        c.moveTo(400,0);
        c.lineTo(400,200);

        c.moveTo(400, 200);
        c.lineTo(200, 200);

        c.moveTo(400, 200);
        c.lineTo(600, 200);

        c.stroke();
    }


    render(){


        return(
            <div className={'process-block'}>
                <div className={'process_block_wrapper'}>
                    <h3 className={'process_title'}>
                        <span>P</span>rocess
                    </h3>

                    <canvas
                        className={'process_scheme'}
                        ref={el => this.canvas = el}
                        width={800}
                        height={800}
                    >

                    </canvas>

                    <div className={'img_block'}>
                        <img className={'scheme_img img_doc'} src={Document} />
                        {/*<img className={'scheme_img'} src={Develop} />*/}
                        {/*<img className={'scheme_img'} src={Design} />*/}

                        {/*<img className={'scheme_img'} src={Seo} />*/}
                        {/*<img className={'scheme_img'} src={Idea} />*/}
                        {/*<img className={'scheme_img'} src={Start} />*/}
                        {/*<img className={'scheme_img'} src={Test} />*/}
                    </div>

                </div>
            </div>
        )

    }
}

export default ProcessBlock;
