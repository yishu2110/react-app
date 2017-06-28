import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './Slider.less'
export default class Slider extends Component {
    constructor(){
        super();
        this.state={
            index:0
        };
    }
    render(){
        let options={
            continuous: true,
            callback:(index)=>{
                this.setState({
                    index
                });
            }
        };
        return(
            <div>
                <ReactSwipe className="carousel" swipeOptions={options}>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-cart"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-mo"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-food"></i>
                                <span className="food">美食</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="dots">
                    <ul>
                        <li className={this.state.index===0?'active':''}></li>
                        <li className={this.state.index===1?'active':''}></li>
                        <li className={this.state.index===2?'active':''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}