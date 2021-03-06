import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Sticky, StickyContainer} from "react-sticky";
import {Tabs} from "antd";
import List from "../Charge/List";
const TabPane = Tabs.TabPane;
class Charge extends React.Component {
	constructor (props) {
		super();
		this.state = {
			activePage: 'fee',
			navList: [
				{
					name: '话费&水电费',
					url: 'fee',
					id: 1,
				},
				{
					name: '快递',
					url: 'express',
					id: 1,
				},
				{
					name: '签证',
					url: 'visa',
					id: 1,
				},
				{
					name: '租车',
					url: 'rentcar',
					id: 1,
				},
				{
					name: '家政',
					url: 'houseservice',
					id: 1,
				},
			]
		}
	}
	handleChange (e) {
		console.log(e);
		this.setState({
			activePage: e
		})
	}
	componentWillMount () {

	}
	render () {
		const movie = {
			container: {
				backgroundColor: '#fff',
				height: '90vh',
			},
			tabList: {
				paddingLeft: '10px',
				paddingRight: '10px',
			}
		};
		const renderTabBar = (props, DefaultTabBar) => (
			<Sticky bottomOffset={0}>
				{({ style }) => (
					<DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff',height: '50px', fontSize: '20px', borderBottom: 'none' }} />
				)}
			</Sticky>
		);
		return(
			<div style={movie.container}>
				<StickyContainer>
					<Tabs
						defaultActiveKey={this.state.activePage}
						activeKey={this.state.activePage}
						onChange={this.handleChange.bind(this)}
						size='large'
						renderTabBar={renderTabBar}
						style={movie.tabList}
					>
						{
							this.state.navList.map((val, index) => {
								return <TabPane tab={val.name} key={val.url}>
									<List/>
								</TabPane>
							})
						}
					</Tabs>
				</StickyContainer>
			</div>
		)
	}
}
export default Charge