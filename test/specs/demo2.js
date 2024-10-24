import { expect, browser, $ } from "@wdio/globals"
import pgUltimateQA from "../pageobjects/ultimateQA"
import objUtils from "../util/objUtils"

describe("My Login application", () => {
  it("Fill Sample Form_TC001", async () => {


    await pgUltimateQA.navigate()
    
    await objUtils.setObjectValue(pgUltimateQA.contactNameEdit1, "Nicole")
    await objUtils.setObjectValue(pgUltimateQA.contactMessageEdit1, "Nicole's message")
    await objUtils.setObjectValue(pgUltimateQA.sum, "12")
    await objUtils.clickObject(pgUltimateQA.submitBtn1)

    const msg = await objUtils.getObjectText(pgUltimateQA.errorMsg)

    await expect(msg).toContain('You entered the wrong number in captcha.')

   
  })
})
