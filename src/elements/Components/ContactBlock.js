import React, {Component} from 'react';
import ContactFromTabs from './ContactFromTabs';
import FooterBlock from "./FooterBlock";



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


                    <div className={'contact-info'}>
                        <div className={'cont-phone'}>
                            <div className={'border-one border-figure'}></div>
                            <div className={'border-two border-figure'}></div>
                            <span>Телефон: </span>
                            <span>
                                <a href={'tel:+38(048)770-09-29'}>+38 (048) 770-09-29</a>
                                <a href={'tel:+38(094)995-49-27'}>+38 (094) 995-49-27</a>

                            </span>
                        </div>
                        <div className={'cont-address'}>
                            <div className={'border-one border-figure'}></div>
                            <div className={'border-two border-figure'}></div>
                            <span>Адрес:</span>
                            <span>Одесса ул.Водопроводная 10</span>
                        </div>
                        <div className={'cont-email'}>
                            <div className={'border-one border-figure'}></div>
                            <div className={'border-two border-figure'}></div>
                            <span>E-mail:</span>
                            <span><a href={'mailto:info@wecandoweb.com'}>info@wecandoweb.com</a></span>
                        </div>
                    </div>


                </div>

                <FooterBlock />

            </div>
        )
    }
}


export default ContactBlock;
