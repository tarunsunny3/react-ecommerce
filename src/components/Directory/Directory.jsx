import React, { Component } from 'react'
import MenuItem from '../MenuItem/MenuItem.jsx';
import sections from './directory-data';
import './DirectoryStyles.scss';
export default class Directory extends Component {
    render() {
        return (
            <div className="directory-menu">
              {
                  sections.map(({id, ...otherProps})=>(
                      <MenuItem key={id} {...otherProps} />
                  ))
              }
            </div>
        )
    }
}
