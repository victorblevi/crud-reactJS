import React, { Component } from 'react'

export default class Grid extends Component {

    constructor(props){
        super(props)
    }
    offsetToCssClasses(numbers) {
        numbers += '';
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        if (cols[0]) classes += `offset-xs-${cols[0]}`
        if (cols[1]) classes += ` offset-sm-${cols[1]}`
        if (cols[2]) classes += ` offset-md-${cols[2]}`
        if (cols[3]) classes += ` offset-lg-${cols[3]}`

        return classes
    }

    toCssClasses(numbers) {
        numbers += '';
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if (cols[0]) classes += `col-xs-${cols[0]}`
        if (cols[1]) classes += ` col-sm-${cols[1]}`
        if (cols[2]) classes += ` col-md-${cols[2]}`
        if (cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }

    render() {
        const offSetClasses = this.offsetToCssClasses(this.props.offset || 12)
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={`${gridClasses} ${offSetClasses}`}>
                {this.props.children}
            </div>
        )
    }
}