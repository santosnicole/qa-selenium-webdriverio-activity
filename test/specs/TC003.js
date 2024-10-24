import { browser, expect } from "@wdio/globals"
import login from "../pageobjects/login.js"
import signup from "../pageobjects/signup.js"
import contactList from "../pageobjects/contactList.js"
import objUtils from "../util/objUtils"
import moment from "moment"
import addContact from "../pageobjects/addContact.js"

describe("Heroku App SignUp_TC003", () => {
  it("Navigate to thinking tester website.", async () => {
    await login.navigate()
  })

  it("Login using the save credentials.", async () => {
    const seatNum = "13"
    const my_email = `test_${moment().format(
      "YYYYMMDD"
    )}${seatNum}@test.com`
    const password = "SamplePassword"

    await objUtils.setObjectValue(login.emailTxt, my_email)
    await objUtils.setObjectValue(login.passwordTxt, password)
    await objUtils.clickObject(login.loginBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Contact List")
  })

  it("User clicks the Add New Contact Button", async () => {
    await objUtils.clickObject(contactList.addContactBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Add Contact")
  })

  it("User adds first contact", async () => {
    await objUtils.setObjectValue(addContact.firstName, "Nicole")
    await objUtils.setObjectValue(addContact.lastName, "Santos")
    await objUtils.setObjectValue(addContact.birthdate, "1990-05-12")
    await objUtils.setObjectValue(addContact.email, "nicole.santos@email.com")
    await objUtils.setObjectValue(addContact.phone, "8005551234")
    await objUtils.setObjectValue(addContact.street1, "123 Maple Street")
    await objUtils.setObjectValue(addContact.street2, "Apt 4B")
    await objUtils.setObjectValue(addContact.city, "New York")
    await objUtils.setObjectValue(addContact.stateProvince, "NY")
    await objUtils.setObjectValue(addContact.postalCode, "10001")
    await objUtils.setObjectValue(addContact.country, "USA")

    await objUtils.clickObject(addContact.submitBtn)
  })

  it("User clicks the Add New Contact Button", async () => {
    await objUtils.clickObject(contactList.addContactBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Add Contact")
  })

  it("User adds second contact", async () => {
    await objUtils.setObjectValue(addContact.firstName, "James")
    await objUtils.setObjectValue(addContact.lastName, "Garcia")
    await objUtils.setObjectValue(addContact.birthdate, "1985-11-23")
    await objUtils.setObjectValue(addContact.email, "james.garcia@email.com")
    await objUtils.setObjectValue(addContact.phone, "8005555678")
    await objUtils.setObjectValue(addContact.street1, "456 Oak Avenue")
    await objUtils.setObjectValue(addContact.street2, "Unit 12")
    await objUtils.setObjectValue(addContact.city, "Los Angeles")
    await objUtils.setObjectValue(addContact.stateProvince, "CA")
    await objUtils.setObjectValue(addContact.postalCode, "90001")
    await objUtils.setObjectValue(addContact.country, "USA")

    await objUtils.clickObject(addContact.submitBtn)
  })

  it("User clicks the Add New Contact Button", async () => {
    await objUtils.clickObject(contactList.addContactBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Add Contact")
  })

  it("User adds third contact", async () => {
    await objUtils.setObjectValue(addContact.firstName, "Lily")
    await objUtils.setObjectValue(addContact.lastName, "Johnson")
    await objUtils.setObjectValue(addContact.birthdate, "1992-07-30")
    await objUtils.setObjectValue(addContact.email, "lily.johnson@email.com")
    await objUtils.setObjectValue(addContact.phone, "8005559876")
    await objUtils.setObjectValue(addContact.street1, "789 Pine Road")
    await objUtils.setObjectValue(addContact.street2, "Suite 300")
    await objUtils.setObjectValue(addContact.city, "Chicago")
    await objUtils.setObjectValue(addContact.stateProvince, "IL")
    await objUtils.setObjectValue(addContact.postalCode, "60601")
    await objUtils.setObjectValue(addContact.country, "USA")

    await objUtils.clickObject(addContact.submitBtn)
  })
})
