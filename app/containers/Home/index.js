import React, {Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index'
import Slider from '../../components/Slider/Slider';
import Ad from './subpage/ad';
export default class Home extends Component {
    render(){
        return(
            <div>
                <HomeHeader cityName="北京"/>
                <Slider/>
                <Ad/>
            </div>
        )
    }
}