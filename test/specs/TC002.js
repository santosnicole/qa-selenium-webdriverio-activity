import { expect } from "@wdio/globals"
import login from "../pageobjects/login.js"
import contactList from "../pageobjects/contactList.js"
import objUtils from "../util/objUtils"
import moment from "moment"

describe("Heroku App SignUp_TC002", () => {
  it("Navigate to thinking tester website", async () => {
    await login.navigate()
  })
  it("User fills out fields.", async () => {
    const seatNum = "13"
    const my_email = `test_${moment().format(
      "YYYYMMDD"
    )}${seatNum}@test.com`
    const password = "SamplePassword"

    await objUtils.setObjectValue(login.emailTxt, my_email)
    await objUtils.setObjectValue(login.passwordTxt, password)
    await objUtils.clickObject(login.loginBtn)
  })

  it("Click Submit button.", async () => {

    await objUtils.clickObject(login.loginBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle) 
    await expect(pageTitle).toContain('Contact List')


  })
})
