import file from "./file";
import reporter from "./reporter";

class objUtil {
  /** *******************************************************
   * @function clickObject | @author nicole_20241023
   * @description Click Object
   * @param {Object} objElement - Object to be clicked
   * @returns <none>
   ******************************************************* */
  async clickObject(objElement) {
    await reporter.addLog(`Started Function: clickObject`);
    await objElement.waitForExist();
    await objElement.click();
    await reporter.addLog(`Completed Function: clickObject`);
  }

  /** *******************************************************
   * @function setObjectValue | @author nicole_20241023
   * @description Set object value
   * @param {Object} objElement - Object to set value
   * @param {String} strText - Value to set
   * @returns <none>
   ******************************************************* */
  async setObjectValue(objElement, strText) {
    await reporter.addLog(`Started Function: setObjectValue`);
    await objElement.waitForExist();
    await objElement.setValue(strText);
    const strXpath = await objElement.selector;
    await reporter.addLog(`Object [${strXpath}] Value Set to [${strText}]`);
    await reporter.addLog(`Completed Function: setObjectValue`);
  }

  /** *******************************************************
   * @function getObjectText | @author nicole_20241023
   * @description Get object text
   * @param {Object} objElement - Object to get text
   * @returns {String} Text retrieved from the object
   ******************************************************* */
  async getObjectText(objElement) {
    await reporter.addLog(`Started Function: getObjectText`);
    await objElement.waitForExist();
    const strText = await objElement.getText();
    const strXpath = await objElement.selector;
    await reporter.addLog(`Object [${strXpath}] Text [${strText}]`);
    await reporter.addLog(`Completed Function: getObjectText`);
    return strText;
  }
}

export default new objUtil();
