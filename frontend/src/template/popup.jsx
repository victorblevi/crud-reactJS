import React, { Component } from 'react'

export default props => (
    <div>
        <input type="checkbox" id="popup" />
        <label htmlFor="popup" className="btn">Open Popup</label>
        <div className="popup-container">
            <div className="popup-mask"></div>
            <div className="popup-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur sem et elit eleifend dictum. Donec aliquet blandit leo ac imperdiet. Suspendisse elementum magna justo, vitae bibendum ex suscipit quis. Quisque luctus felis ut massa mollis, nec porta quam tristique.
      </div>
            <label className="popup-close" htmlFor="popup"></label>
        </div>
    </div>
)