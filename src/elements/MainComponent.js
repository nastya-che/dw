import React, { Component } from 'react';
import './styles/css/generalFile.css';
import {MenuItems, GalleryItems} from './DataController/DataController';
import LeftMenuComponent from './Components/LeftMenuComponent';
import HeaderBlock from './Components/HeaderBlock';
import GalleryBlock from './Components/GalleryBlock';
import ProcessBlock from './Components/ProcessBlock';
import ContactBlock from './Components/ContactBlock';

class MainComponent extends Component {


    render() {
        return (
            <div className="App">

                <LeftMenuComponent menuData={MenuItems} />
                <HeaderBlock />
                <GalleryBlock galleryItems={GalleryItems}/>
                <ProcessBlock />
                <ContactBlock />
            </div>
        );
    }
}

export default MainComponent;
