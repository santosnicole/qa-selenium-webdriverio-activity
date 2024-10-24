import { browser, expect } from "@wdio/globals"
import login from "../pageobjects/login.js"
import contactList from "../pageobjects/contactList.js"
import objUtils from "../util/objUtils"
import moment from "moment"
import contactDetails from "../pageobjects/contactDetails.js"

describe("Heroku App SignUp_TC005", () => {
  it("TC005_Navigate to thinking tester website", async () => {
    await login.navigate()
  })

  it("TC005_Login using the save credentials.", async () => {
    const seatNum = "13"
    const my_email = `testn_${moment().format("YYYYMMDDHH")}${seatNum}@test.com`
    const password = "SamplePassword"

    await objUtils.setObjectValue(login.emailTxt, my_email)
    await objUtils.setObjectValue(login.passwordTxt, password)
    await objUtils.clickObject(login.loginBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Contact List")
  })

  it("TC005_User clicks the last contact on the table", async () => {
    await objUtils.clickObject(contactList.getContactElement(3))

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Contact Details")
  })

  it("TC005_User clicks the delete contact button", async () => {
    await objUtils.clickObject(contactDetails.deleteBtn)
    await browser.acceptAlert()
  })
})
