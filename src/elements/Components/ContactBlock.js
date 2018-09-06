import React, {Component} from 'react';
import ContactFromTabs from './ContactFromTabs';



class ContactBlock extends Component{



    componentDidMount(){
        let el = document.getElementsByClassName('form_wrapper');
        let animatedClass = 'animated';

        el[0].classList.add(animatedClass);
    }

    onTabClick(itemIndex){

        let el = document.getElementsByClassName('form_wrapper');
        let animatedClass = 'animated';

        for (let i = 0; i < el.length; i++){
            let item = el[i];
            item.classList.remove(animatedClass);
            item.style.display = 'none';
        }

        el[itemIndex].classList.add(animatedClass);
    }

    render(){


        return(
            <div className={'contact_block'}
            id={'contacts'}>
                <h3 className={'contact_title'}><span>C</span>ontacts</h3>

                <div className={'contact_content'}>
                    <div className={'form_content'}>

                        {/*<div className={'form_tabs'}>*/}
                            {/*<a className={'form_tab active'}><span className={'line line1'}></span>Email</a>*/}
                            {/*<a className={'form_tab'}>Phone</a>*/}
                            {/*<a className={'form_tab'}>Skype</a>*/}
                        {/*</div>*/}

                        <ContactFromTabs onTabClick={this.onTabClick.bind(this)} />


                        <div className={'cont_form'}>
                            <div className={'form_wrapper fadeInUp'}>
                                <input type={'text'} placeholder={'Your name'} name={'cont_name'} />
                                <input type={'tel'} placeholder={'Phone number'} name={'cont_tel'} />
                                <textarea placeholder={'Your message'} name={'cont_msg'} />
                            </div>

                            <div className={'form_wrapper fadeInUp'}>

                                <textarea placeholder={'Your message'} name={'cont_msg'} />
                            </div>


                            <button className={'form_btn'}>Send application</button>
                        </div>
                    </div>
                </div>

                {/*<div className={'call_form'}>*/}
                    {/*<div className={'call_form_wrapper'}>*/}
                        {/*<input type={'text'} placeholder={'Your name'} name={'cont_name'} />*/}
                        {/*<input type={'tel'} placeholder={'Phone number'} name={'cont_tel'} />*/}
                    {/*</div>*/}
                {/*</div>*/}

                <div className={'contact-info'}></div>

            </div>
        )
    }
}


export default ContactBlock;
