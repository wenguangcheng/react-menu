import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import history from '../../common/history';
import logo from '../../common/logo.jpg'
// import {h} from 'react-router-dom';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_831918_i0b2l6x63zj.js',
});
export default class SiderMenu extends React.Component {
	constructor (props) {
		super();
		this.state = {
			key: '/'
		}
	}
	handleClick = (e) => {
		// console.log(this.props);
		// console.log(e);
		// console.log(this.props);
		// window.history.push(e.key);
		history.push(e.key);
		this.setState({
			key: e.key
		})
	};
	logoClick = (e) => {
		history.push('/');
		this.setState({
			key: '/'
		})
	};
	componentWillMount () {
		// console.log(history);
		history.listen((location, action) => {
			// console.log(location);
			// console.log(action);
            this.setState({
                key: location.pathname
            });
		});
		// console.log(this.props);
	}
	render() {
		// console.log(this.props);
		// console.log();
		const navStyle = {
			height: '50px',
			lineHeight: '50px',
			fontSize: '16px',
			display: 'flex',
			alignItems: 'center'
		};
		return (
			<Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
				<div className="logo" onClick={this.logoClick} style={{color: '#fff', fontSize: '20px', textAlign: 'center', height: '100px', lineHeight: '100px', cursor: 'pointer'}}>
					{/*<img src={logo} alt="logo" style={{width: '100%', height: '100%'}}/>*/}
				</div>
				<Menu theme="dark" mode="inline" selectedKeys={[this.state.key]} onClick={this.handleClick}>
					<Menu.Item key="/" style={navStyle}>
						<IconFont type="icon-shouye" style={{fontSize: '30px'}}/>
						<span className="nav-text">主页</span>
					</Menu.Item>
					<Menu.Item key="/takeout" style={navStyle}>
						<IconFont type="icon-_waimai" style={{fontSize: '30px'}}/>
						<span className="nav-text">外卖</span>
					</Menu.Item>
					<Menu.Item key="/travel" style={navStyle}>
						<IconFont type="icon-tubiaozhizuomoban_shatan" style={{fontSize: '30px'}}/>
						<span className="nav-text">旅游</span>
					</Menu.Item>
					<Menu.Item key="/eat" style={navStyle}>
						<IconFont type="icon-meishi" style={{fontSize: '30px'}}/>
						<span className="nav-text">美食</span>
					</Menu.Item>
					<Menu.Item key="/charge" style={navStyle}>
						<IconFont type="icon-chongzhi" style={{fontSize: '30px'}}/>
						<span className="nav-text">生活</span>
					</Menu.Item>
					<Menu.Item key="/music" style={navStyle}>
						<IconFont type="icon-heijiao"  style={{fontSize: '30px'}}/>
						<span className="nav-text">全网音乐</span>
					</Menu.Item>
					<Menu.Item key="/movie" style={navStyle}>
						<IconFont type="icon-shipin"  style={{fontSize: '30px'}}/>
						<span className="nav-text">全网视频</span>
					</Menu.Item>
					<Menu.Item key="/fiction" style={navStyle}>
						<IconFont type="icon-xiaoshuo"  style={{fontSize: '30px'}}/>
						<span className="nav-text">全网小说</span>
					</Menu.Item>
					<Menu.Item key="/my" style={navStyle}>
						<IconFont type="icon-gerenzhongxin"  style={{fontSize: '30px'}}/>
						<span className="nav-text">个人中心</span>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}