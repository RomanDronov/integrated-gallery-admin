import React from 'react';
import './PreDropInfo.css';
export default class PreDropInfo extends React.Component{
    constructor(props){
        super(props);
        this.width=this.props.size;
        this.height=this.props.size;
    }
    render(){
        return(
            <div className='dropInfo'>
            <svg height={this.height} viewBox="0 0 512 512" className='dropIcon' fill="white" width={this.width} xmlns="http://www.w3.org/2000/svg"><path d="m354 60c0-33.085938-26.914062-60-60-60h-234c-33.085938 0-60 26.914062-60 60v234c0 33.085938 26.914062 60 60 60h96v40h40v-40h98c33.085938 0 60-26.914062 60-60v-96h39v-40h-39zm-40 234c0 11.027344-8.972656 20-20 20h-234c-11.027344 0-20-8.972656-20-20v-234c0-11.027344 8.972656-20 20-20h234c11.027344 0 20 8.972656 20 20zm158 138h40v40c0 22.089844-17.910156 40-40 40h-39v-40h39zm-199 40h40v40h-40zm80 0h40v40h-40zm159-274v40h-40v-40h-39v-40h39c22.089844 0 40 17.910156 40 40zm-40 78h40v40h-40zm0 78h40v40h-40zm-276 118h39v40h-39c-22.089844 0-40-17.910156-40-40v-40h40zm37-318h40v120h-120v-40h51.714844l-71.359375-71.359375 28.285156-28.28125 71.359375 71.355469zm0 0"/></svg>
            <div className='name'>DROP YOUR ITEMS HERE</div>
        </div>
        )
    }
}