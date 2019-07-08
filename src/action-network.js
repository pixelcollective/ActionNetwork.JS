import Form from './js/Form'

/**
 * ActionNetwork.JS Public Interface
 */
const actionnetwork = {
  init: function (document) {
    this.setRefs(document)
    this.doForms()
  },

  setRefs: function (document) {
    this.formRef = {
      emailSignup: document.querySelectorAll(
        `.action-network-email-form`,
      ),
      generalForm: document.querySelectorAll(
        `.action-network-general-form`,
      ),
      petition: document.querySelectorAll(
        `.action-network-petition`
      ),
    }
  },

  doForms: function () {
    this.formRef.emailSignup.forEach(form =>
      new Form(form)
    )
  },
}

export default actionnetwork