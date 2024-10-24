class signup {

    get firstNameTxt() {
      return $('//input[@id="firstName"]')
    }

    get lastNameTxt() {
      return $('//input[@id="lastName"]')
    }

    get emailTxt() {
      return $('//input[@id="email"]')
    }

    get passwordTxt() {
      return $('//input[@id="password"]')
    }

    get signupBtn() {
        return $('//button[@id="submit"]')
    }

}

export default new signup()
