import Api from '@/services/Api'

export default {
  fetchFundos () {
    return Api().get('fundos')
  },
}
