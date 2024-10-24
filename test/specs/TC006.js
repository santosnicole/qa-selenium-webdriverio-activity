import { browser, expect } from "@wdio/globals"
import login from "../pageobjects/login.js"
import contactList from "../pageobjects/contactList.js"
import objUtils from "../util/objUtils"
import moment from "moment"
import file from "../util/file.js"

describe("Heroku App SignUp_TC004", () => {
  it("Navigate to thinking tester website.", async () => {
    await login.navigate()
  })

  it("Login using the save credentials.", async () => {
    const seatNum = "13"
    const my_email = `test_${moment().format("YYYYMMDD")}${seatNum}@test.com`
    const password = "SamplePassword"

    await objUtils.setObjectValue(login.emailTxt, my_email)
    await objUtils.setObjectValue(login.passwordTxt, password)
    await objUtils.clickObject(login.loginBtn)

    const pageTitle = await objUtils.getObjectText(contactList.pageTitle)
    await expect(pageTitle).toContain("Contact List")
  })
  it("User creates a text file containing all the details of the existing contacts in the table.", async () => {
    const contacts = []
    await browser.waitUntil(
      async () => {
        return (await $("#myTable")).isDisplayed()
      },
      { timeout: 5000, timeoutMsg: "Table was not displayed in time" }
    )
    const rowCount = await $$('//*[@id="myTable"]/tr') // Select all rows in the table
    const count = rowCount.length

    for (let i = 1; i <= count; i++) {
      const name = await objUtils.getObjectText(
        contactList.getContactElementCell(i, 2)
      )
      const birthdate = await objUtils.getObjectText(
        contactList.getContactElementCell(i, 3)
      )
      const email = await objUtils.getObjectText(
        contactList.getContactElementCell(i, 4)
      )
      const phone = await objUtils.getObjectText(
        contactList.getContactElementCell(i, 5)
      )
      const addressline1 = await objUtils.getObjectText(
        contactList.getContactElementCell(i, 6)
      )
      const addressline2 = await objUtils.getObjectText(
        contactList.getContactElementCell(i, 7)
      )
      const country = await objUtils.getObjectText(
        contactList.getContactElementCell(i, 8)
      )

      const contact = {
        name,
        birthdate,
        email,
        phone,
        addressline1,
        addressline2,
        country,
      }

      contacts.push(contact)
    }

    const contactsDetails = contacts
      .map(
        (contact) => `
        Name: ${contact.name}
        Birthdate: ${contact.birthdate}
        Email: ${contact.email}
        Phone: ${contact.phone}
        Address Line 1: ${contact.addressline1}
        Address Line 2: ${contact.addressline2}
        Country: ${contact.country}
    `
      )
      .join("\n")

    const table_details_path = "/home/citco/selenium/logs/table_details"
    await file.CreateTxtFile(
      table_details_path,
      `Started Function: Logging Table Details\n\n${contactsDetails}`
    )
    await file.AppendToFile(
      table_details_path,
      `Completed Function: Logging Table Details`
    )
  })
})
