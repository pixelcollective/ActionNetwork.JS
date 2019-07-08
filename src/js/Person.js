/**
 * Action Network Activist
 */
export default class Person {
  constructor(person) {
    if(person) {
      person.firstName && this.setFirstName(firstName)
      person.lastName && this.setLastName(lastName)
      person.email && this.setEmail(email)
      person.address && this.setAddress(address)
      person.languagesSpoken && this.addLanguages(languagesSpoken)
    }
  }

  setFirstName(firstName) {
    this.first_name = firstName
  }

  setLastName(lastName) {
    this.last_name = lastName
  }

  setEmail(email) {
    this.email_addresses = [{ address: email }]
  }

  addEmail(email) {
    this.email_addresses.push(email)
  }

  addCustomField(field) {
    this.custom_fields ?
      this.custom_fields.push(field) :
      this.custom_fields = field
  }

  setPostal(postal) {
    this.postal_addresses = [
      { postal_code: postal },
    ]
  }

  addPostal(postal) {
    this.postal_addresses ?
      this.postal_addresses.push({postal_code: postal}) :
      this.postal_addresses = [{postal_code: postal}]
  }

  setStreet(street) {
    this.street_address.address_lines = street
  }

  setCity(city) {
    this.street_address.locality = city
  }

  setState(state) {
    this.street_address.region = state
  }

  setCountry(country) {
    this.street_address.country = country
  }

  setLatitude(latitude) {
    this.street_address.location.latitude = latitude
  }

  setLongitude(longitude) {
    this.street_address.location.longitude = longitude
  }

  setAddress(address) {
    this.street_address = {
      address_lines: address.street && address.street,
      locality: address.city && address.city,
      region: address.state && addresss.state,
      postal_code: address.postal_code && address.postal_code,
      country: address.country && address.country,
      location: {
        latitude: address.latitude && address.latitude,
        longitude: address.longitude && address.longitude,
      },
    }
  }

  addAddress(address) {
    const addressObj = {
      address_lines: address.street && address.street,
      locality: address.city && address.city,
      region: address.state && addresss.state,
      postal_code: address.postal_code && address.postal_code,
      country: address.country && address.country,
      location: {
        latitude: address.latitude && address.latitude,
        longitude: address.longitude && address.longitude,
      },
    }

    this.street_address ?
      this.street_address.push({ ...addressObj }) :
      this.street_address = { ...addressObj }
  }

  addSpokenLanguage(lang) {
    this.languages_spoken ?
      this.languages_spoken.push(lang) :
      this.languages_spoken = [lang]
  }
}