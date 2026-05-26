import fs from 'fs';
import path from 'path';
import { TestData } from '../interface/Module1TestData.interface';

/**
 * author Testers Talk
 */
export async function loadTestData() {
    const environment = `${process.env.TEST_EXECUTION_ENV}` || 'qa';
    const directoryPath = path.join(__dirname, `../../test-data/`, environment);

    const jsonData: TestData = {};
    const files = fs.readdirSync(directoryPath);//read all files or folder under the dir 

        files.forEach(file => {
   
        if (path.extname(file) === '.json') {//path.extname in node.js gives file extension name and also === compares values and type strictly
            const filePath = path.join(directoryPath, file);
            const fileContent: TestData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            Object.assign(jsonData, fileContent); // Merge the content into a single object
        }
    });
    return jsonData;
}