import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './MenuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='/' label='Dashboard' icon='dashboard'/>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclos de pagamentos' icon='usd' />
            {/* <MenuItem path='#Credits' label='Créditos' icon='money' />
            <MenuItem path='#debts' label='Débitos' icon='credit-card' />
            <MenuItem path='#saldo' label='Saldo' icon='amazon' /> */}
        </MenuTree>
    </ul>
)