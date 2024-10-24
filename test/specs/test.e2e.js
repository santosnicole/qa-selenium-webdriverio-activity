import { expect, browser, $ } from "@wdio/globals"
import pgUltimateQA from "../pageobjects/ultimateQA"
import objUtils from "../util/objUtils"
import file from "../util/file"
import reporter from "../util/reporter"

describe("My Login application", () => {
  it("Fill Sample Form_TC001", async () => {
    await reporter.addLog(`Step 1: Navigate to UltimateQA website`)
    await reporter.addLog('Navigate to UltimateQA website')
    await pgUltimateQA.navigate()
    await browser.takeScreenshot()

    await reporter.addLog(`Step 2: User fills contact name field`)
    await reporter.addLog('User fills contact name field')
    await objUtils.setObjectValue(pgUltimateQA.contactNameEdit, "Nicole")
    
    await reporter.addLog(`Step 3: User fills message field`)
    await reporter.addLog('User fills message field')
    await objUtils.setObjectValue(pgUltimateQA.contactMessageEdit, "Nicole's message")

    await reporter.addLog(`Step 4: User clicks submit button`)
    await reporter.addLog('User clicks submit button')
    await objUtils.clickObject(pgUltimateQA.submitBtn)

    await reporter.addLog(`Step 5: Check if success message exists`)
    await reporter.addLog('Check if success message exists')
    const msg = await objUtils.getObjectText(pgUltimateQA.successMsgElm)
    await expect(msg).toContain("Thanks for contacting us")
  })
})
