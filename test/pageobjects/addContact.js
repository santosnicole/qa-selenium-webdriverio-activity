class addContact {
    get firstName() {
      return $('#firstName');
    }
  
    get lastName() {
      return $('#lastName');
    }
  
    get birthdate() {
      return $('#birthdate');
    }
  
    get email() {
      return $('#email');
    }
  
    get phone() {
      return $('#phone');
    }
  
    get street1() {
      return $('#street1');
    }
  
    get street2() {
      return $('#street2');
    }
  
    get city() {
      return $('#city');
    }
  
    get stateProvince() {
      return $('#stateProvince');
    }
  
    get postalCode() {
      return $('#postalCode');
    }
  
    get country() {
      return $('#country');
    }

    get submitBtn() {
        return $('#submit')
    }
  }
  
  export default new addContact();
  