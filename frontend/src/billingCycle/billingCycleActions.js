import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectedTab } from '../common/tab/tabAction'

const BASE_URL = 'http://localhost:3004/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycle`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycle`, values)
            .then(resp => {
                toastr.success('Operação realizada com sucesso!')
                dispatch([
                    resetForm('billingCycleForm'), 
                    getList(),
                    selectedTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectedTab('tabUpdate')
    ]
}