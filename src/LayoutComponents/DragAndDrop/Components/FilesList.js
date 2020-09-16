import React from 'react';
import './FilesList.css';
export default class FilesList extends React.Component{
    getNames(files){
        let names=[];
        for(let i=0;i<files.length;i++){
            names.push(files[i].name);
        }
        return names;
    }
    getSize(file){
        let size=file.size;
        if(size<1000000){
            return `${Math.round(size/1000)} KB`;
        }
        else if(size<1000000000){
            size=size/1000000;
            return `${Math.floor(size * 100) / 100} MB`;
        }
        else{
            size=size/1000000000;
            return `${Math.floor(size * 100) / 100} GB`;
        }
        
    }
    getName(file){
        return file.name;
        }
    getFilesInformation(files){
        let filesInfo=[];
        for(let i=0;i<files.length;i++){
            filesInfo.push(<div className='files'>
                <div className='name' id={`f${i}`}>{this.getName(files[i])} {this.getSize(files[i])}</div>
                <button className='deleteButton' onClick={()=>this.handeleDeleteFileClick(i)}>X</button>
                </div>);
        }
        return filesInfo;
    }
    handeleDeleteFileClick(id){
        this.props.deleteFile(id);
    }
    render(){
        let files=this.getFilesInformation(this.props.files);
        return(<div className="FilesList">
            <div className="Title">Uploaded files</div>
            <div>{files}</div></div>
            
        )
    }
}