import React from 'react';
export default class FilesList extends React.Component{
    getNames(files){
        let names=[];
        for(let i=0;i<files.length;i++){
            names.push(files[i].name);
        }
        return names;
    }
    render(){
        let names=this.getNames(this.props.files);
        return(
            <div>{names}</div>
        )
    }
}