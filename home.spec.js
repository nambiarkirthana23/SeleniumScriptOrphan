// const { By, Builder, Key, until } = require('selenium-webdriver');
// const assert = require('assert');

// async function GoogleTest() {
//     let driver;
//     try {
//         // Initialize the Chrome WebDriver
//         driver = await new Builder().forBrowser('chrome').build();
        
//         // Open Google homepage
//         await driver.get('https://www.amazon.com');
        
//         // Find the search box, type "Selenium", and press Enter
//         await driver.findElement(By.id("twotabsearchtextbox")).sendKeys("Laptop", Key.RETURN);
        
//         // Wait for the title to contain "Selenium" indicating the search results page loaded
//         await driver.wait(until.titleContains("Laptop"), 5000);
        
        
//     } catch (error) {
//         console.log("Error:", error);
//     } finally {
//         // Quit the driver
//         if (driver) {
//             await driver.quit();
//         }
//     }
// }
// GoogleTest();


// const { By, Builder, Key, until } = require('selenium-webdriver');
// const assert = require('assert');

// async function GoogleTest() {
//     let driver;
//     try {
//         // Initialize the Chrome WebDriver
//         driver = await new Builder().forBrowser('chrome').build();
        
//         // Open Google homepage
//         await driver.get('https://www.google.com');
        
//         // Find the search box, type "Selenium", and press Enter
//         await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
        
//         // Wait for the title to contain "Selenium" indicating the search results page loaded
//         await driver.wait(until.titleContains("Selenium"), 10000);
        
//         // Optionally, assert that the title is correct
//         let title = await driver.getTitle();
//         assert(title.includes("Selenium"), "Title does not include 'Selenium'");
        
//         console.log("Test passed!");
//     } catch (error) {
//         console.log("Error:", error);
//     } finally {
//         // Quit the driver
//         if (driver) {
//             await driver.quit();
//         }
//     }
// }

// const { Builder, By, Key, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const path = require('path');

// // Command-line argument handling
// const rid = process.argv[2] || 'XF72028';

// // Set up Chrome options
// let chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--profile-directory=Person 1');

// // Initialize the WebDriver
// (async function main() {
//     let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
//     try {
//         // Open the login page
//         console.log('Opening login page...');
//         await driver.get('http://pumpeye.rotosol.solar/');

//         // Extract the CSRF token
//         const csrfToken = await driver.findElement(By.name('__RequestVerificationToken')).getAttribute('value');

//         // Find the username and password input fields
//         const usernameField = await driver.findElement(By.name('UserName'));
//         console.log("usernameField",usernameField);
//         const passwordField = await driver.findElement(By.name('Password'));
//         console.log("passwordField",passwordField);

//         // Enter your login credentials
//         await usernameField.sendKeys('PilaneA');
//         await passwordField.sendKeys('Akshay@123');

//         // Submit the login form
//         await passwordField.sendKeys(Key.RETURN);

        
//         await driver.wait(until.elementLocated(By.id('RotoSite')), 60000);

       
//         const hlinkElement = await driver.findElement(By.tagName('a'));
//         await hlinkElement.click();

//         // Navigate to pump details
//         // await driver.get('http://pumpeye.rotosol.solar/PumpConfig/getPumpDetailsView');
//         await driver.get('http://pumpeye.rotosol.solar/PumpEyeDashBoard/Index');

//         // Find the input field to search for the RID and enter the value
//         const ridInputField = await driver.findElement(By.xpath('/html/body/div[3]/div[2]/div[2]/section[2]/div/div/div/div[1]/div[2]/div/label/input'));
//         await ridInputField.sendKeys(rid);

//         // Wait for the table to load
//         await driver.wait(until.elementLocated(By.id('tblPumpDetail')), 10000);

//         // Wait until the table has rows and is visible
//         await driver.wait(until.elementLocated(By.className('sorting_1')), 120000);

//         // Get the table rows (excluding the header row)
//         const tableElement = await driver.findElement(By.id('tblPumpDetail'));
//         const rows = await tableElement.findElements(By.tagName('tr'));

//         // Extract values from each row
//         const allValues = [];
//         console.log(rows);
//         for (let i = 1; i < rows.length; i++) {  // Skipping header
//             const cells = await rows[i].findElements(By.tagName('td'));
//             const cellValues = [];
//             for (let cell of cells) {
//                 const cellText = await cell.getText();
//                 cellValues.push(cellText);
//             }
//             allValues.push(cellValues);
//         }

//         // Log the table values
//         console.log('Table Data:', allValues);

//         // Click the edit pencil icon (adjust the XPath if needed)
//         const editPencilIcon = await driver.findElement(By.xpath('/html/body/div[3]/div[2]/div[2]/section[2]/div/div/div/div[2]/div/table/tbody/tr/td[14]/a'));
//         await editPencilIcon.click();

//         // Get the value from the FCode input field
//         const fcodeInputElement = await driver.findElement(By.id('FCode'));
//         const value = await fcodeInputElement.getAttribute('value');
//         console.log('FCode value:', value);

//     } catch (err) {
//         console.error('An error occurred:', err);
//     } finally {
//         // Close the WebDriver
//         await driver.quit();
//     }
// })();


// const { Builder, By, Key, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // Command-line argument handling
// const rid = 'XHB2267';
// console.log("*****************rid***********************", rid);

// // Set up Chrome options
// let chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--profile-directory=Person 1');

// // Initialize the WebDriver
// (async function main() {
//     let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
//     try {
//         // Open the login page
//         console.log('Opening login page...');
//         await driver.get('http://pumpeye.rotosol.solar/');

//         // Log in
//         // const usernameField=await driver.findElement(By.name('UserName'))
//         const usernameField = await driver.wait(until.elementLocated(By.name('UserName')), 10000); // Wait until username field is present
//         const passwordField = await driver.findElement(By.name('Password'));
//         await usernameField.sendKeys('PilaneA');
//         await passwordField.sendKeys('Akshay@123');
//         await passwordField.sendKeys(Key.RETURN);

//         // Click on the first link (adjust if necessary)
//         console.log('Navigating to dashboard...');
//         const hlinkElement = await driver.wait(until.elementLocated(By.tagName('p')), 20000); // Wait until the link is present

//         await driver.wait(until.elementIsEnabled(hlinkElement), 10000); // Ensure the element is enabled

//         // Optional delay before clicking
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         // Click on the element using JavaScript as a fallback
//         await driver.executeScript("arguments[0].click();", hlinkElement);

//         // Navigate to the Pump Dashboard
//         await driver.get('http://pumpeye.rotosol.solar/PumpEyeDashBoard/Index');

//         // Enter the RID in the search input
//         const ridInputField = await driver.wait(until.elementLocated(By.xpath("//span[@id='select2-ddlRId-container']"))).click();
//         console.log("ridInputField",ridInputField)
//         await ridInputField.sendKeys(rid, Key.RETURN);
//         console.log("ridinputField",ridInputField)

//         // Wait for the table to load (increase timeout if necessary)
//         console.log('Waiting for the table to load...');
//         await driver.wait(until.elementLocated(By.id('tblPumpDetail')), 20000);

//         // Log all the rows in the table to check if RID exists
//         const rows = await driver.findElements(By.xpath("//table[@id='tblPumpDetail']//tr"));
//         console.log(`Total rows found: ${rows.length}`);
//         for (let i = 0; i < rows.length; i++) {
//             const rowText = await rows[i].getText();
//             console.log(`Row ${i}: ${rowText}`);
//         }

//         // Locate the row that contains the data for the entered RID
//         const tableRow = await driver.findElement(By.xpath("//table[@id='tblPumpDetail']//tr[td[contains(text(),'" + rid + "')]]"));

//         // Extract the data for IMEI, ControlNo, and FCode
//         const imei = await tableRow.findElement(By.xpath("td[2]")).getText();  // assuming IMEI is in the 2nd column
//         const controlNo = await tableRow.findElement(By.xpath("td[3]")).getText();  // assuming ControlNo is in the 3rd column
//         const fcode = await tableRow.findElement(By.xpath("td[4]")).getText();  // assuming FCode is in the 4th column

//         // Log the extracted data
//         console.log(`IMEI: ${imei}`);
//         console.log(`ControlNo: ${controlNo}`);
//         console.log(`FCode: ${fcode}`);

//     } catch (err) {
//         console.error('An error occurred:', err);
//     } finally {
//         // Close the WebDriver
//         await driver.quit();
//     }
// // })();

// const { Builder, By, Key, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // Command-line argument handling
// const rid = 'XHB2267';
// console.log("*****************rid***********************", rid);

// // Set up Chrome options
// let chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--profile-directory=Person 1');

// // Initialize the WebDriver
// (async function main() {
//     let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
//     try {
//         // Open the login page
//         console.log('Opening login page...');
//         await driver.get('http://pumpeye.rotosol.solar/');

//         // Log in
//         const usernameField = await driver.wait(until.elementLocated(By.name('UserName')), 10000);
//         const passwordField = await driver.findElement(By.name('Password'));
//         await usernameField.sendKeys('PilaneA');
//         await passwordField.sendKeys('Akshay@123');
//         await passwordField.sendKeys(Key.RETURN);

//         // Navigate to the dashboard
//         console.log('Navigating to dashboard...');
//         await driver.wait(until.elementLocated(By.tagName('p')), 20000);
//         const hlinkElement = await driver.findElement(By.tagName('p'));
//         await driver.wait(until.elementIsEnabled(hlinkElement), 10000);
//         await driver.executeScript("arguments[0].click();", hlinkElement);

//         // Navigate to the Pump Dashboard
//         await driver.get('http://pumpeye.rotosol.solar/PumpEyeDashBoard/Index');

//         // Locate the RID input field and click it
//         await driver.wait(until.elementLocated(By.id('select2-ddlRId-container')), 10000);
//         const ridInputFieldContainer = await driver.findElement(By.id('select2-ddlRId-container'));
//         await ridInputFieldContainer.click(); // Click the container to open the dropdown

//         // Wait for the search input field to appear
//         const ridInputField = await driver.wait(until.elementLocated(By.xpath("//input[contains(@class, 'select2-search__field')]")), 10000);
//         // await new Promise(resolve => setTimeout(resolve, 500)); // Optional delay
//         await ridInputField.sendKeys(rid, Key.RETURN); // Enter RID and hit RETURN

//         // Optional delay to wait for the dropdown to process the input
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         // Click the search button (if needed) or wait for the results to appear
//         // Uncomment this line if there's a search button to click after entering the RID
//         // await driver.findElement(By.id('searchButtonId')).click(); 

//         // Wait for the table to load
//         console.log('Waiting for the table to load...');
//         await driver.wait(until.elementLocated(By.id('tblPumpDetail')), 10000);
//         await driver.wait(until.elementLocated(By.className('sorting_1')), 120000);
//         //data have to check

//                 // Get the table rows (excluding the header row)
//                 const tableElement = await driver.findElement(By.id('tblPumpDetail'));
//                 const rows = await tableElement.findElements(By.tagName('tr'));
        
//                 // Extract values from each row
//                 const allValues = [];
//                 console.log(rows);
//                 for (let i = 1; i < rows.length; i++) {  // Skipping header
//                     const cells = await rows[i].findElements(By.tagName('td'));
//                     const cellValues = [];
//                     for (let cell of cells) {
//                         const cellText = await cell.getText();
//                         cellValues.push(cellText);
//                     }
//                     allValues.push(cellValues);
//                 }
        
//                 // Log the table values
//                 console.log('Table Data:', allValues);
        
//                 // Click the edit pencil icon (adjust the XPath if needed)
//                 // const editPencilIcon = await driver.findElement(By.xpath('/html/body/div[3]/div[2]/div[2]/section[2]/div/div/div/div[2]/div/table/tbody/tr/td[14]/a'));
//                 // await editPencilIcon.click();
        
//                 // // Get the value from the FCode input field
//                 // const fcodeInputElement = await driver.findElement(By.id('FCode'));
//                 // const value = await fcodeInputElement.getAttribute('value');
//                 // console.log('FCode value:', value);
        
        
//     } catch (err) {
//         console.error('An error occurred:', err);
//     } finally {
//         // Close the WebDriver
//         await driver.quit();
//     }
// })();

// })();



// const { Builder, By, Key, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const xlsx = require('xlsx');
// const path = require('path');

// const excelFilePath = path.join(__dirname, 'Testing_orphans_file.xlsx');

// // Read the Excel file
// function readExcelFile(filePath) {
//     const workbook = xlsx.readFile(filePath);
    
//     // Get the first sheet name
//     const sheetName = workbook.SheetNames[0];

    
//     // Get the data from the sheet
//     const worksheet = workbook.Sheets[sheetName];
       
//     // Convert the sheet data to JSON format for easy access
//     const sheetData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    
//     // Log the data
//     console.log("*******************data*********************",sheetData);
    
//     return sheetData;
// }

// // Example usage
// const data = readExcelFile(excelFilePath);
// console.log("Data1",data);

// //one by one data of rid from sheetdata

// const rids = data.slice(1).map(row => row[0]); // This assumes RIDs are in the first column

// // const slicerids=data.slice(1);
// // console.log("slicerids",slicerids);
// // console.log("Extracted RIDs:", rids);

// // for(const rid of rids)
// // {
// //     console.log("rid",rid);
// // }



// // Command-line argument handling
// // const rid = 'XI51974';
// // console.log("*****************rid***********************", rid);

// // Set up Chrome options


// let chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--profile-directory=Person 1');

// // Sleep function
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// function extractValues(labelText) {
//     const controllerNoMatch = labelText.match(/Controller # (\w+)/);
//     console.log("controllerNoMatch",controllerNoMatch);
//     const imeiMatch = labelText.match(/IMEI # (\d+)/);
//     // const motorNoMatch = labelText.match(/Motor # (\w+)/);
//     // const pumpNoMatch = labelText.match(/Pump # (\w+)/);

//     return {
//         controllerNo: controllerNoMatch ? controllerNoMatch[1] : null,
//         imei: imeiMatch ? imeiMatch[1] : null,
//     //     motorNo: motorNoMatch ? motorNoMatch[1] : null,
//     //     pumpNo: pumpNoMatch ? pumpNoMatch[1] : null
//     };
// }

// // Initialize the WebDriver

// (async function main() {
//     let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
//     try {
//         // Open the login page
//         console.log('Opening login page...');
//         await driver.get('http://pumpeye.rotosol.solar/');

//         // Log in
//         const usernameField = await driver.wait(until.elementLocated(By.name('UserName')), 10000);
//         const passwordField = await driver.findElement(By.name('Password'));
//         await usernameField.sendKeys('PilaneA');
//         await passwordField.sendKeys('Akshay@123');
//         await passwordField.sendKeys(Key.RETURN);

//         // Navigate to the dashboard
//         console.log('Navigating to dashboard...');
//         await driver.wait(until.elementLocated(By.tagName('p')), 20000);
//         const hlinkElement = await driver.findElement(By.tagName('p'));
//         await driver.wait(until.elementIsEnabled(hlinkElement), 10000);
//         await driver.executeScript("arguments[0].click();", hlinkElement);

//         // Navigate to the Pump Dashboard
//         await driver.get('http://pumpeye.rotosol.solar/PumpEyeDashBoard/Index');

//         // Locate the RID input field and click it
//         const ridInputFieldContainer = await driver.findElement(By.id('select2-ddlRId-container'));
//         await ridInputFieldContainer.click(); // Click the container to open the dropdown

//         // Wait for the search input field to appear
//         const ridInputField = await driver.wait(until.elementLocated(By.xpath("//input[contains(@class, 'select2-search__field')]")), 10000);
//         for(const rid of rids)
//         {
//         // Send RID to search and highlight the matching option
//         await ridInputField.sendKeys(rid); 

//         // Wait for the RID option to be highlighted and ready to click
//         const selectrid = await driver.wait(until.elementLocated(By.xpath("//li[contains(@class,'select2-results__option select2-results__option--highlighted')]")), 10000);
//         console.log("selectrid", selectrid);

//         await selectrid.click(); // Click the highlighted option
        
//         // Introduce a delay (e.g., 3 seconds) to allow the data to load after selection
//         await sleep(3000); // 3000ms = 3 seconds
        
//         // Further actions after the data is loaded
//         console.log("Data loaded, proceeding to next step...");



//         const labelElement = await driver.findElement(By.id('LblRid'));
//         const labelText = await labelElement.getText();
//         console.log("Label Text:", labelText);

//         // Extract values from the label text
//         const values = extractValues(labelText);
//         console.log("Controller No:", values.controllerNo);
//         console.log("IMEI:", values.imei);
//         // console.log("Motor No:", values.motorNo);
//         // console.log("Pump No:", values.pumpNo);

//         // Additional steps can go here
//         // e.g., locating elements, clicking buttons, etc.
        
//         // i want imei no,controller no,fcode
//         }
        
//     } catch (err) {
//         console.error('An error occurred:', err);
//     } finally {
//         // Close the WebDriver
//         await driver.quit();
//     }
// })();
// -----------------------


const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const xlsx = require('xlsx');
const path = require('path');

const excelFilePath = path.join(__dirname, 'Testing_orphans_file.xlsx');

// Read the Excel file
function readExcelFile(filePath) {
    const workbook = xlsx.readFile(filePath);
    
    // Get the first sheet name
    const sheetName = workbook.SheetNames[0];

    // Get the data from the sheet
    const worksheet = workbook.Sheets[sheetName];
       
    // Convert the sheet data to JSON format for easy access
    const sheetData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    
    // Log the data
    console.log("*******************data*********************", sheetData);
    
    return sheetData;
}

// Example usage
const data = readExcelFile(excelFilePath);
console.log("Data1", data);

// Function to read or create an Excel file
function readOrCreateExcelFile(filePath) {
    let workbook;
    try {
        // Try to read the existing workbook
        workbook = xlsx.readFile(filePath);
    } catch (error) {
        // If the file doesn't exist, create a new workbook
        workbook = xlsx.utils.book_new();
        let sheet = xlsx.utils.aoa_to_sheet([]); // Create an empty sheet
        xlsx.utils.book_append_sheet(workbook, sheet, 'Sheet1'); // Append the sheet to the workbook
    }
    return workbook;
}

// Function to write JSON data to Excel
function writeToExcelFile(filePath, jsonData) {
    let workbook = readOrCreateExcelFile(filePath);
    let sheet = workbook.Sheets['Sheet1'];

    // Prepare the data to be written in stringified JSON format
    const dataArray = jsonData.map(obj => [JSON.stringify(obj)]); // Wrap JSON in an array to fit into a single cell

    // Write headers if the sheet is new or empty
    const existingData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    let startingRow = existingData.length === 0 ? 1 : existingData.length;

    if (startingRow === 1) {
        const header = ["device"]; // Header for the single-cell JSON data
        xlsx.utils.sheet_add_aoa(sheet, [header], { origin: "A1" });
    }

    // Append new JSON data as a string in the next available row
    xlsx.utils.sheet_add_aoa(sheet, dataArray, { origin: `A${startingRow + 1}` }); // Insert in the correct row
    xlsx.writeFile(workbook, filePath);
}


// Define the path to the output Excel file
const outputFilePath = 'Output_file.xlsx'; 

// Function to extract RIDs from the sheet data
const rids = data.slice(1).map(row => row[0]); 

let chromeOptions = new chrome.Options();
chromeOptions.addArguments('--profile-directory=Person 1');

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to extract values from the label text
function extractValues(labelText) {
    const controllerNoMatch = labelText.match(/Controller # (\w+)/);
    const imeiMatch = labelText.match(/IMEI # (\d+)/);
    const ridisMatch=labelText.match(/RID # (\w+)/);
   

    return {
        controllerNo: controllerNoMatch ? controllerNoMatch[1] : null,
        imei: imeiMatch ? imeiMatch[1] : null,
        rid:ridisMatch ? ridisMatch[1] :null
    };
}
async function processRID(driver, rid) {
    try {
        // Locate the RID input field and click it
        const ridInputFieldContainer = await driver.findElement(By.id('select2-ddlRId-container'));
        
        await ridInputFieldContainer.click(); // Click the container to open the dropdown


        try{
        // Wait for the search input field to appear
        const ridInputField = await driver.wait(until.elementLocated(By.xpath("//input[contains(@class, 'select2-search__field')]")), 10000);
        
        // Send RID to search and highlight the matching option
        await ridInputField.sendKeys(rid);
        }
        catch(error)
        {
            console.log("******************orphan rid is*****************",rid);
        }
        //if rid is not there then sending in orphan if timeouterror error like waiting for element to be located by path:waiting for an element to be located 
        // Wait for the RID option to be highlighted and ready to click
        const selectrid = await driver.wait(until.elementLocated(By.xpath("//li[contains(@class,'select2-results__option select2-results__option--highlighted')]")), 10000);
        await selectrid.click(); // Click the highlighted option
        
        // Introduce a delay to ensure the page and content are loaded
        await delay(6000);
        
        // Click the container to access the hidden <td> element
        const fcodeClickContainer = await driver.findElement(By.className('col-md-11'));
        await fcodeClickContainer.click(); 

        // Attempt to fetch the value from the hidden <td> element
        let fcode;
        try {
            const rowElement = await driver.findElement(By.xpath("//table[@id='Sum2']//tr[contains(@class, 'odd')]"));
            console.log("rowElement",rowElement);
            const hiddenValueElement = await rowElement.findElement(By.xpath(".//td[8]"));
            console.log("hiddenValueElement",hiddenValueElement)
           
            fcode = await driver.executeScript("return arguments[0].textContent;", hiddenValueElement);
        } catch (error) {
            console.log("Hidden value element not found, assigning default fcode.");
            fcode = "F139218_1"; 
        }

        console.log("Extracted fcode:", fcode);

        // Delay to allow for page changes if necessary
        await delay(6000);

        // Locate and extract values from the label
        const labelElement = await driver.findElement(By.id('LblRid'));
        const labelText = await labelElement.getText();
        const values = extractValues(labelText);

        // Log extracted values
        console.log("Controller No:", values.controllerNo);
        console.log("IMEI:", values.imei);
        console.log("RID:", values.rid);
        console.log("fcode:", fcode);

        // Write data to Excel
        let jsonData = [
            {
                Date: "16/07/2022", "Time": "12:18:39AM", "CONT_MFR": "HX", "User_code": "24",
                "User_name": "Nilesh_Chavan", "HP": "1", "Rated_head": "30", "Pump_head": "60",
                "Motor_type": "BLDC", "Pump_type": "Submersible", "Fcode": fcode, "P0": "276",
                "P1": "349", "F1": "360", "P2": "442", "F2": "720", "P3": "559", "F3": "1080",
                "P4": "708", "F4": "1440", "P5": "896", "F5": "1800", "Panel_wp": "900",
                "Remarks": "10HP_AC_30mtr_46_04_Motor_24T_240SL", "PMAXFREQ1": "120", "PFREQLSP1": "20",
                "PFREQHSP1": "105", "PREFFREQ1": "100", "PMAXDCV1": "111", "PMAXDCI1": "9",
                "PMAXKW1": "0.9", "PMAXFLW1": "23.33", "PDCVOC1": "135", "PDCISC": "11",
                "IMEI": values.imei, "Vendor": "rotomag", "State": "jharkhand",
                "Controller_no": values.controllerNo, "RID_no": rid, "pcntrmode1": "2",
                "spclpreffreq1": "0", "sinterval": "15", "Days_output": "441000"
            },
        ];

        writeToExcelFile(outputFilePath, jsonData);

    } catch (error) {
        console.error('Error while processing RID:', rid, error);
    }

    // Refresh the page after processing the RID
    await driver.navigate().refresh();
    await delay(3000); // Adjust delay if necessary
}

// Initialize the WebDriver
(async function main() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    try {
        // Open the login page
        console.log('Opening login page...');
        await driver.get('http://pumpeye.rotosol.solar/');

        // Log in
        const usernameField = await driver.wait(until.elementLocated(By.name('UserName')), 10000);
        const passwordField = await driver.findElement(By.name('Password'));
        await usernameField.sendKeys('PilaneA');
        await passwordField.sendKeys('Akshay@123');
        await passwordField.sendKeys(Key.RETURN);

        // Navigate to the dashboard
        console.log('Navigating to dashboard...');
        await driver.wait(until.elementLocated(By.tagName('p')), 20000);
        const hlinkElement = await driver.findElement(By.tagName('p'));
        await driver.wait(until.elementIsEnabled(hlinkElement), 10000);
        await driver.executeScript("arguments[0].click();", hlinkElement);

        // Navigate to the Pump Dashboard
        await driver.get('http://pumpeye.rotosol.solar/PumpEyeDashBoard/Index');

        // Loop through each RID
        for (const rid of rids) {
            console.log(`***************Processing RID***************: ${rid}`);
            await processRID(driver, rid);  
        
        }
        //data want 

    } catch (err) {
        console.error('An error occurred:', err);
    } finally {
        // Close the WebDriver
        await driver.quit();
    }
})();


//for fcode -cursor-pointer
//we need to click on that then 
//XEB1440 - need to check fcode

//-XGA0232