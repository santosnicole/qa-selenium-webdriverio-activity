class contactDetails{
    get editBtn() {
        return $('//button[@id="edit-contact"]')
    }
    get deleteBtn() {
        return $('#delete')
    }
    get returnToListBtn(){
        return $('#return')
    }
}
export default new contactDetails()