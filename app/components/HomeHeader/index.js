import React, {Component} from 'react';
//主页头部
import './index.less'
export default class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header back">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-moreunfold"></i>
                </div>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <input type="text" placeholder="请输入内容"/>
                </div>
                <div className="profile">
                <i className="iconfont icon-accountfilling"></i>
                </div>
            </div>
        )
    }
}