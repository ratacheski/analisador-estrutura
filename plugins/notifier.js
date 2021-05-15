export default ({ app, store }, inject) => {
  inject('notifier', {
    showInfo({ content = '' }) {
      store.commit('snackbar/showMessage', { content, color: 'info' })
    },
    showError({ content = '' }) {
      store.commit('snackbar/showMessage', { content, color: 'error' })
    },
    showSuccess({ content = '' }) {
      store.commit('snackbar/showMessage', { content, color: 'success' })
    },
    showMessage({ content = '', color = '' }) {
      store.commit('snackbar/showMessage', { content, color })
    },
  })
}
