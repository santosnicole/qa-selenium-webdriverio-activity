class Page {
    get contactNameEdit() {
        return $('//input[@id="et_pb_contact_name_0"]')
    }
    get contactMessageEdit() {
        return $('//*[@id="et_pb_contact_message_0"]')
    }
    get contactNameEdit1() {
        return $('//input[@id="et_pb_contact_name_1"]')
    }
    get contactMessageEdit1() {
        return $('//*[@id="et_pb_contact_message_1"]')
    }
    get sum() {
        return $('//*[@id="et_pb_contact_form_1"]/div[2]/form/div/div/p/input')
    }
    get submitBtn() {
        return $('//*[@id="et_pb_contact_form_0"]/div[2]/form/div/button')
    }
    get submitBtn1() {
        return $('//*[@id="et_pb_contact_form_1"]/div[2]/form/div/button')
    }
    get errorMsg() {
        return $('//*[@id="et_pb_contact_form_1"]/div[1]/ul/li')
    }
    get successMsgElm() {
        return $('//*[@id="et_pb_contact_form_0"]/div/p')
    }

    async navigate() {
        await browser.url('https://ultimateqa.com/filling-out-forms')
    }
}

export default new Page()