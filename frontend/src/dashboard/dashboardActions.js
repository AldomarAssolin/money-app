import axios from 'axios'

const BASE_URL = 'http://localhost:3004/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/BillingCycle/summary`)
    //parece haver problema nessa requisição.
    
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}