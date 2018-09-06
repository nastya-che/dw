import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class FormTab extends Component{

    constructor(){
        super();
        this.tab = React.createRef();
    }

    componentDidMount(){
        let activeClass = 'active_tab';

        this.props.itemIndex === 0 && this.tab.current.classList.add(activeClass);

    }

    tabClick(){

        let tabs = document.getElementsByClassName('form_tab'),
            activeClass = 'active_tab';


        for (let i = 0; i < tabs.length; i++){
            let tab = tabs[i];
            tab.classList.remove(activeClass);
        }

        this.tab.current.classList.add(activeClass);

        this.props.onTabClick.bind(this, this.props.itemIndex);


    }

    render(){
        return(
            <a className={'form_tab'}
               ref={this.tab}
               onClick={this.tabClick.bind(this)}
            >
                <span className={'line'}></span>
                {this.props.itemVal}
            </a>
        )
    }
}

export default FormTab;
