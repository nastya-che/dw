import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FormTab from './FormTab';


class ContactFromTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                "email",
                "phone",
                "skype"
            ]
        };
    }


    render(){

        let tabs = [],
            s = this.state;

        for (let i = 0; i < s.tabs.length; i++){
            let tab = s.tabs[i];
            tabs.push(
                <FormTab
                    key={i}
                    itemIndex={i}
                    itemVal={tab}
                    onTabClick={this.props.onTabClick.bind(this)}
                />
            )
        }


        return(

            <div className={'form_tabs'}>
                {tabs}
            </div>
        );
    }

}

export default ContactFromTabs;

