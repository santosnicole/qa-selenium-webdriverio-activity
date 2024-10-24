class contactList {
  get pageTitle() {
    return $('//header/h1')
  }
  get addContactBtn() {
    return $('//button[@id="add-contact"]')
  }
  getContactElement(rowNum) {
    return $(`//*[@id="myTable"]/tr[${rowNum}]`)
  }
  getContactElementCell(rowNum, cellNum) {
    return $(`//*[@id="myTable"]/tr[${rowNum}]/td[${cellNum}]`)
  }
  get postalCode() {
    return $('//*[@id="myTable"]/tr/td[7]')
  }
  getTr(){
    return $('//*[@id="myTable"]/tr')
  }
}
export default new contactList()