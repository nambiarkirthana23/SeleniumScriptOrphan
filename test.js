const xls=require('xlsx');
const path=require('path')

function writeexcel(filePath)
{
    const workbook = xlsx.writeexcel(filePath);
    console.log("filePath",filePath);
}