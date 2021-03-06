import React from 'react';
import { List, Avatar, Icon, Card } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import history from '../../common/history';
import {InfiniteLoader, AutoSizer, WindowScroller} from 'react-virtualized';
import VList from 'react-virtualized/dist/commonjs/List';
import 'react-virtualized/styles.css';
class EatList extends React.Component {
    constructor (props) {
        super();
    }
    loadMore () {
        this.props.loadMore();
    }
    handleDetail (e) {
        // location.pathname = '/eat/detail'
        // console.log(this.props);
        // console.log(history);
        history.push({pathname: '/eat/detail', state: {
                foodId: e
        }})
    }
    isRowLoaded = ({ index }) => {
        console.log(index);
        return !!this.props.listData[index]
    };
    loadMoreRows = ({startInd, lastIndex}) => {
        console.log(startInd, lastIndex);
    };
    componentWillMount () {
        // console.log(this.props);
    }
    renderItem = ({ index, key, style }) => {
        // const { data } = this.state;
        // const item = data[index];
        return (
            <List.Item key={key} style={style}>
                <div>Content</div>
            </List.Item>
        );
    };
    render () {
        const eatlist = {
            list: {
                padding: '10px 10px'
            },
            container: {
                cursor: 'pointer',
            },
            images: {
                backgroundColor: '#fff7e6'
            },
	        text: {
		        overflow: 'hidden',
                textOverflow:'ellipsis',
	            whiteSpace: 'nowrap',
                fontSize: '16px'
            }
        };
        // const VList = ({height, isScrolling, onChildScroll, scrollTop, onRowsRendered, width}) => (
            {/*<VList*/}
                // height={height}
                // isScrolling={isScrolling}
                // onScroll={onChildScroll}
                // overscanRowCount={2}
                // rowCount={this.props.listData.length}
                // rowHeight={73}
                // rowRenderer={this.renderItem}
                // onRowsRendered={onRowsRendered}
                // scrollTop={scrollTop}
                // width={width}
            // />
        // );
        // const autoSize = ({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered }) => (
        //     <AutoSizer disableHeight>
        //         {({ width }) => VList({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered, width })}
        //     </AutoSizer>
        // );
        // const infiniteLoader = ({ height, isScrolling, onChildScroll, scrollTop }) => (
        //     <InfiniteLoader
        //         isRowLoaded={this.isRowLoaded}
        //         loadMoreRows={this.loadMoreRows}
        //         rowCount={this.props.listData.length}
        //     >
        //         {({ onRowsRendered }) => autoSize({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered })}
        //     </InfiniteLoader>
        // );
        return (
            <div>
                {/*<List>*/}
                    {/*{*/}
                        {/*this.props.listData.length > 0 ? <WindowScroller>{infiniteLoader}</WindowScroller> : null*/}
                    {/*}*/}
                {/*</List>*/}
                {/*<WindowScroller>*/}
                    {/*<InfiniteLoader*/}
                        {/*isRowLoaded={this.isRowLoaded.bind(this)}*/}
                        {/*loadMoreRows={this.loadMoreRows.bind(this)}*/}
                        {/*// rowCount={rowCount}*/}
                    {/*>*/}
                    {/*</InfiniteLoader>*/}
                {/*</WindowScroller>*/}
                {/*<InfiniteScroll*/}
                    {/*pageStart={1}*/}
                    {/*loadMore={this.loadMore.bind(this)}*/}
                    {/*hasMore={this.props.loading}*/}
                    {/*initialLoad={false}*/}
                    {/*loader={<div key={0} style={{textAlign: 'center'}}>{this.props.loading ? 'Loading...' : '这是我的底线了'}</div>}*/}
                {/*>*/}
                    {/*<List*/}
                        {/*itemLayout="vertical"*/}
                        {/*size="default"*/}
                        {/*dataSource={this.props.listData}*/}
                        {/*style={eatlist.list}*/}
                        {/*grid={{ gutter: 10, column: 3 }}*/}
                        {/*renderItem={item => (*/}
                            {/*<List.Item*/}
                                {/*key={item.topic_id}*/}
                                {/*// extra={<img width={200} alt="食物图片" src={item.imageList[0]} style={eatlist.images}/>}*/}
                            {/*>*/}
                                {/*<Card*/}
                                    {/*onClick={this.handleDetail.bind(this, item.topic_id)}*/}
                                    {/*style={eatlist.container}*/}
                                    {/*title={item.title}*/}
                                    {/*cover={<img width={400} height={400} alt="食物图片" src={item.imageList[0]} style={eatlist.images}/>}*/}
                                {/*>*/}
                                    {/*<div style={eatlist.text}>*/}
                                        {/*{item.subject}*/}
                                    {/*</div>*/}
                                {/*</Card>*/}
                            {/*</List.Item>*/}
                        {/*)}*/}
                    {/*/>*/}
                {/*</InfiniteScroll>*/}
            </div>
        )
    }
}
export default EatList