import React from 'react';
import './AlbumIcon.css';
export default class AlbumIcon extends React.Component{
    constructor(props){
        super(props);
       this.previewsArray=this.getPreviewsArray();
    }
  getPreviewsArray(){
      let previewsArray=[];
        for(let i=0;i<10;i++){
            let url=this.getPreviewImages();
            let style={
                backgroundImage:'url('+url+')',
            }
            previewsArray.push(
                <div className='image' style={style}></div>
            );
        }
        return previewsArray;
    }
   getPreviewImages(){
       return this.getPreviewLink();
    }
    getPreviewLink(){
        return 'https://www.ice.edu/sites/default/files/styles/width_670/public/content/home-campus-item/image/cayetano-gil-518367-unsplash-homepage-choose-campus_670x720_0-min_0.jpg?itok=ss1nJuIr';
    }
    render(){
        return(
            <div className='AlbumIcon'>
                <div className='name'>Album Name</div>
                <div className='preview'>{this.previewsArray}</div>
            </div>
        )
    }
}