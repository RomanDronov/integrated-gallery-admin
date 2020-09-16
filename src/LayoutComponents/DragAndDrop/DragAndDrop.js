import React from 'react';
import FilesList from './Components/FilesList';
import './DragAndDrop.css';
import ReleaseBox from './Components/ReleaseBox';
import PreDropInfo from './Components/PreDropInfo';
export default class DragAndDrop extends React.Component{
    constructor(props){
        super(props);
        this.iconsSize=this.props.iconsSize;
        this.state={
            files:[],
            release:false
        }
    }
    dragOver(e){
        e.preventDefault();
        console.log('dragOver');
    }
    dragEnter(e){
        e.preventDefault();
        console.log('dragEnter');
        this.setState({release:true});
    }
    dragLeave(e){
        e.preventDefault();
        console.log('dragLeave');
        this.setState({release:false});
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
        this.setState({files:arrayFiles,release:false});
    }
    deleteFile(id){
        let files=this.state.files;
        files.splice(id,1);
        this.setState({
            files:files
        })
    }
    render(){
        let list=this.state.files.length>0?<FilesList files={this.state.files} deleteFile={()=>this.deleteFile()}/>:null;
        let dropInfo=this.state.release?<ReleaseBox size={this.iconsSize}/>:<PreDropInfo size={this.iconsSize}/>;
        return(
            <div className='DragAndDrop'>
                <div className='Title'>Upload photos</div>
                <div className="dropContainer"
                onDragOver={(e)=>this.dragOver(e)}
                onDragEnter={(e)=>this.dragEnter(e)}
                onDragLeave={(e)=>this.dragLeave(e)}
                onDrop={(e)=>this.fileDrop(e)}>
                  {dropInfo}
                </div>
                {list}
            </div>
        )
    }
}