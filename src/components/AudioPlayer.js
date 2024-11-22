import React, { useState, useRef } from 'react';

function AudioPlayer() {
  

  return (
    <div>
   
      <iframe width="80" height="80" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1389621160&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <div style={{
        fontSize: '10px',
        color: '#006A4E',
        lineHeight: '1.2', // Added line-height for better readability
        wordBreak: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
        fontWeight: 100,
      }}>
      <a href="https://soundcloud.com/butterflyforkill" title="" target="_blank" style={{ color: '#006A4E', textDecoration: 'none' }}></a>  <a href="https://soundcloud.com/butterflyforkill/vedi-mene-v-khram-kaver" title="" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}></a></div>
    </div>
  );
}

export default AudioPlayer;