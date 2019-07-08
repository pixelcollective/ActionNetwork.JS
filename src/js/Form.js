import ActionNetworkRequest from './ActionNetworkRequest'
import Person from './Person'

/**
 * ActionNetwork.JS Form Handler
 */
export default class Form {
  constructor(referencedElement) {
    this.ref = referencedElement
    this.handleForm = this.handleForm.bind(this)

    this.request = new ActionNetworkRequest
    this.person = new Person

    this.init()
  }

  /**
   * Initializes the class
   */
  init() {
    this.gatherRawInput()
    this.processInput()

    this.ref.addEventListener('submit', this.handleForm)
  }

  /**
  * Gathers form data from the DOM
  */
  gatherRawInput() {
    this.raw = {
      form: {
        id: this.ref.dataset.form,
        identifier: this.ref.dataset.identifier,
        tags: this.ref.dataset.tags,
        autoresponder: this.ref.dataset.autoresponder,
      },
      fields: {
        email:     this.ref.querySelector(`input[name='email']`),
        firstName: this.ref.querySelector(`input[name='firstName']`),
        lastName:  this.ref.querySelector(`input[name='lastName']`),
        street:    this.ref.querySelector(`input[name='street']`),
        city:      this.ref.querySelector(`input[name='city']`),
        state:     this.ref.querySelector(`input[name='state']`),
        postal:    this.ref.querySelector(`input[name='postal']`),
      },
    }
  }

  /**
   * Processes form data
   */
  processInput() {
    // bail early if not actionable
    if(!this.raw.form.id) {
      return this.valid = false
    }

    // otherwise save clean refs
    this.form = this.raw.form
    this.fields = this.raw.fields
  }

  /**
   * Process input event
   */
  handleForm(e) {
    e.preventDefault()

    this.preparePayload()

    this.request
      .setResource('forms')
      .setEndpoint('submissions')
      .setSigner(this.person)
      .setResourceId(this.form.id)
      .setFormIdentifier(this.form.identifier)
      .setAutoresponder(this.form.autoresponder)
      .setTags([this.form.tags]) 
      .fireRequest()

    /**
     * Finally add a success class to the form and
     * return false to ensure default browser event
     * is ignored
     */
    this.ref.classList.add('form-submission-success')
    return false
  }

  preparePayload() {
    this.fields.email.value &&
      this.person.setEmail(this.fields.email.value)

    this.fields.firstName &&
      this.fields.firstName.value &&
      this.person.setFirstName(this.fields.firstName.value)

    this.fields.lastName &&
      this.fields.lastName.value &&
      this.person.setLastName(this.fields.lastName.value)

    this.fields.street &&
      this.fields.street.value &&
      this.person.setAddress(this.fields.street.value)

    this.fields.city &&
      this.fields.city.value &&
      this.person.setCity(this.fields.city.value)

    this.fields.state &&
      this.fields.state.value &&
      this.person.setState(this.fields.state.value)

    this.fields.postal &&
      this.fields.postal.value &&
      this.person.setPostal(this.fields.postal.value)
  }
}