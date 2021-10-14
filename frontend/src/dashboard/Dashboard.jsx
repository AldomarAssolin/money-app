import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'



class Dashboard extends Component {


    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credits, debits } = this.props.summary
        //console.log(credits)
        return (
            <div>
                <ContentHeader title='DashBoard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='blue' icon='bank'
                            value={`R$ ${credits}`} text='Total de Créditos'
                        />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debits}`} text='Total de Débitos'
                        />
                        <ValueBox cols='12 4' color='green' icon='money'
                            value={`R$ ${credits - debits}`} text='Valor Consolidado/Saldo'
                        />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })//dashboard foi criado no reducers.js
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)