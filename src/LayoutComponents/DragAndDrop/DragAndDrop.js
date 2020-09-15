import React from 'react';
import FilesList from './Components/FilesList';
import './DragAndDrop.css';
export default class DragAndDrop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            files:[],
        }
    }
    dragOver(e){
        e.preventDefault();
    }
    dragEnter(e){
        e.preventDefault();
    }
    dragLeave(e){
        e.preventDefault();
    }
    fileDrop(e){
        e.preventDefault();
        const files=e.dataTransfer.files;
        console.log(files);
        let arrayFiles=this.state.files;
        for(let i=0;i<files.length;i++){
            arrayFiles.push(files[i]);
        }
        console.log(arrayFiles);
        this.setState({files:arrayFiles});
    }
    render(){
        let list=this.state.files.length>0?<FilesList files={this.state.files}/>:null;
        return(
            <div>
                <div className="dropContainer"
                onDragOver={this.dragOver}
                onDragEnter={this.dragEnter}
                onDragLeave={this.dragLeave}
                onDrop={(e)=>this.fileDrop(e)}></div>
                {list}
            </div>
        )
    }
}