import axios from 'axios'

const base = `https://actionnetwork.org/api/v2`

/**
 * Action Network Request
 */
export default class ActionNetworkRequest {
  constructor() {
    this.method = 'post'
    this.resource = 'forms'
    this.endpoint = 'submissions'
    this.identifier = []
    this.tags = []
    this.autoresponder = true
  }

  getRequest() {
    return {
      req: {
        url: `${base}/${this.resource}/${this.resourceId}/${this.endpoint}`,
        headers: { 'Content-Type': 'application/json' },
        data: {
          identifiers: [this.identifier],
          person: { ...this.person },
          add_tags: this.tags,
          triggers: {
            autoresponse: {
              enabled: this.autoresponder ? true : false,
            },
          },
        },
      },
    }
  }

  fireRequest() {
    const { req: { url, data, headers } } = this.getRequest()

    return axios.post(url, data, headers)
                .then(res => res)
  }

  setMethod(method) {
    this.method = method

    return this
  }

  setResource(resource) {
    this.resource = resource

    return this
  }

  setResourceId(resourceId) {
    this.resourceId = resourceId

    return this
  }

  setEndpoint(endpoint) {
    this.endpoint = endpoint

    return this
  }

  setFormIdentifier(identifier) {
    this.identifier = identifier

    return this
  }

  setSigner(signer) {
    this.person = signer

    return this
  }

  setTags(tags) {
    this.tags = tags

    return this
  }

  setAutoresponder(autoresponder) {
    this.autoresponder = autoresponder

    return this
  }
}