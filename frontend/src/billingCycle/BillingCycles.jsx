import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'
import { selectedTab } from '../common/tab/tabAction'


function date() {
    let year = new Date().getFullYear()
    let month;
    switch (new Date().getMonth()) {
        case 0:
            month = 'Janeiro'
            break;
        case 1:
            month = 'Fevereiro'
            break;
        case 2:
            month = 'Março'
            break;
        case 3:
            month = 'Abril'
            break;
        case 4:
            month = 'Maio'
            break;
        case 5:
            month = 'Junho'
            break;
        case 6:
            month = 'Julho'
            break;
        case 7:
            month = 'Agosto'
            break;
        case 8:
            month = 'Setembro'
            break;
        case 9:
            month = 'Outubro'
            break;
        case 10:
            month = 'Novembro'
            break;
        case 11:
            month = 'Dezembro'
            break;

        default:
            break;
    }
    return (`${month}/${year}`)
}



class BillingCycles extends Component {

    componentWillMount(){
        this.props.selectedTab('tabList')
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de pagamentos' small={date()} />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'><h1>Lista</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectedTab}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)