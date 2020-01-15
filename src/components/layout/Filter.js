import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        return (
            <div>
                <div class="d-flex justify-content-center my-4">
                <span class="font-weight-bold indigo-text mr-2 mt-1">0</span>
                <form class="range-field w-25">
                    <input class="border-0" type="range" min="0" max="100" />
                </form>
                <span class="font-weight-bold indigo-text ml-2 mt-1">100</span>
                </div>
            </div>
        )
    }
}

export default Filter
