import { browser, expect } from "@wdio/globals"
import login from "../pageobjects/login.js"
import signup from "../pageobjects/signup.js"
import contactList from "../pageobjects/contactList.js"
import editContact from "../pageobjects/editContact.js"
import objUtils from "../util/objUtils"
import moment from "moment"
import addContact from "../pageobjects/addContact.js"
import contactDetails from "../pageobjects/contactDetails.js"

describe("Heroku App SignUp_TC004", () => {
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

  it("User clicks the first contact on the table.", async () => {
    await objUtils.clickObject(contactList.getContactElement(1))

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Contact Details")
  })

  it("User clicks the edit contact button.", async () => {
    
    await objUtils.clickObject(contactDetails.editBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Edit Contact")
  })

  it("User edit the postal code to the date and time today.", async () => {
    await objUtils.setObjectValue(editContact.postalCodeTxt, "")
    await objUtils.setObjectValue(editContact.postalCodeTxt, "3001")
  })

  it("User clicks the submit button.", async () => {
    
    await objUtils.clickObject(editContact.submitBtn)
    await objUtils.clickObject(contactDetails.returnToListBtn)


    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Contact List")

    // verify postal code     
    const postalCode = await objUtils.getObjectText(contactList.postalCode)
    await expect(postalCode).toContain("3001")
  })
})
