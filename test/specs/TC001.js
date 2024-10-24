import { expect } from "@wdio/globals"
import login from "../pageobjects/login.js"
import signup from "../pageobjects/signup.js"
import contactList from "../pageobjects/contactList.js"
import objUtils from "../util/objUtils.js"
import moment from "moment"

describe("Heroku App SignUp_TC001", () => {
  it("Navigate to thinking tester website", async () => {
    await login.navigate()
  })

  it("User clicks the Sign up button.", async () => {
    await objUtils.clickObject(login.signUpBtn)
  })

  it("User fills out fields.", async () => {
    
    const seatNum = "13"
    const my_email = `test_${moment().format(
      "YYYYMMDD"
    )}${seatNum}@test.com`
    const password = "SamplePassword"

    await objUtils.setObjectValue(signup.firstNameTxt, "Nicole")
    await objUtils.setObjectValue(signup.lastNameTxt, "Santos")
    await objUtils.setObjectValue(signup.emailTxt, my_email)
    await objUtils.setObjectValue(signup.passwordTxt, password)
  })

  it("Click Submit button.", async () => {
    await objUtils.clickObject(signup.signupBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Contact List")
  })
})
