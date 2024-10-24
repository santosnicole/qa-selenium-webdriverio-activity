class login {
  async navigate() {
    await browser.url("https://thinking-tester-contact-list.herokuapp.com/")
  }

  get emailTxt() {
    return $('//input[@id="email"]')
  }

  get passwordTxt() {
    return $('//input[@id="password"]')
  }

  get loginBtn() {
    return $('//button[@id="submit"]')
  }

  get signUpBtn() {
    return $('//button[@id="signup"]')
  }
}

export default new login()
