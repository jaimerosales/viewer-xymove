/////////////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Jaime Rosales 2016 - Forge Developer Partner Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////////////////

// Models

import React, { Component } from 'react';
//import scrollTo from 'scroll-to';
import Helpers from '../Viewer/Viewer-Helpers';
import './Gallery.css';


const tilesData = [
  {
    img: 'images/server-rack.png',
    title: 'Server Rack',
    key: '0001',
    position: '0',
    urn:'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dmlld2VyLXJvY2tzLXJlYWN0L3JhY2tfYXNzLmYzZA'
  },
  {
    img: 'images/cabinet.png',
    title: 'Cabinet',
    key: '0002',
    position: '0',
    urn: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dmlld2VyLXJvY2tzLXJlYWN0L0NhYmluZXQuemlw'
  }
];


class Gallery extends Component {

  onTileSelect(tile, e) {
    e.preventDefault();
    tile.position = '0';
    Helpers.loadNextModel(tile.urn,tile.position)
  }

  onRightSelect (tile, e){
    e.preventDefault();
    tile.position = '1'; // Right side
    Helpers.loadNextModel(tile.urn, tile.position)
  }

   onLeftSelect (tile, e){
    e.preventDefault();
    tile.position = '2'; // Left side
    Helpers.loadNextModel(tile.urn, tile.position)
  }

   render() {
    return (
      <div className="forge-gallery">
        <div>
          <div>
            {tilesData.map((tile, index) =>
              (
                <div className="tile" key={index}>
                  <img className="tile-avatar" src={tile.img} alt={tile.title} />
                  <div className="tile-title">{tile.title}</div>
                  
                  <div className="tile-buttons"> 
                    <a href="#" className="tile-arrows" onClick={this.onLeftSelect.bind(this, tile)}>
                      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                    </a> 
                    <a href="#" className="tile-arrows" onClick={this.onTileSelect.bind(this, tile)}>
                      <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                    </a> 
                    <a href="#"  onClick={this.onRightSelect.bind(this, tile)}>
                      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
	}
}

export default Gallery;
