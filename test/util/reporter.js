import allure from '@wdio/allure-reporter'
import file from "../util/file.js"
class reporter {
    async addLog(strMsg) {
        await file.AppendToFile(global.strPath, strMsg)
        await allure.addStep(strMsg)
    }
    async addStep() {
        
    }
}
export default new reporter()