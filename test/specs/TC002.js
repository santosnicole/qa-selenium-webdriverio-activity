import { expect } from "@wdio/globals"
import login from "../pageobjects/login.js"
import contactList from "../pageobjects/contactList.js"
import objUtils from "../util/objUtils"
import moment from "moment"

describe("Heroku App SignUp_TC002", () => {
  it("TC002_Navigate to thinking tester website", async () => {
    await login.navigate()
  })
  it("TC002_User fills out fields.", async () => {
    const seatNum = "13"
    const my_email = `testn_${moment().format("YYYYMMDDHH")}${seatNum}@test.com`
    const password = "SamplePassword"

    await objUtils.setObjectValue(login.emailTxt, my_email)
    await objUtils.setObjectValue(login.passwordTxt, password)
    await objUtils.clickObject(login.loginBtn)
  })

  it("TC002_Click Submit button.", async () => {
    await objUtils.clickObject(login.loginBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Contact List")
  })
})
