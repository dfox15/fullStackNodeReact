import React, { Component } from 'react'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
    constructor(props) {
        super(props)

        this.state = { new: true }
    }

    render() {
        return (
            <div>
                <SurveyForm />
            </div>
        )
    }
}

export default SurveyNew
