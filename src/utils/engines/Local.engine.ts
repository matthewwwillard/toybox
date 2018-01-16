import {BaseEngineCalls} from "../BaseEngineCalls";
import * as fs from 'fs';
import * as path from 'path';
import {blob} from "aws-sdk/clients/codecommit";

export default class LocalEngine extends BaseEngineCalls
{
    constructor(config:object)
    {
        super(config);
    }
    private toBase64(filePath:string)
    {
        return Buffer.from(fs.readFileSync(filePath)).toString('base64');
    }
    private fromBase64(imageData:any, filepath:any)
    {
        return fs.writeFileSync(filepath, imageData);
    }
    protected async init()
    {
        //generate our upload dir
        try {
            if (!fs.existsSync(this.myConfigs.uploadDir)) {
                fs.mkdirSync(this.myConfigs.uploadDir);
            }
        }
        catch(err)
        {
            console.log('TOY BROKE : ' + err.message);
        }
        return;
    }
    public async get (filename:string)
    {
        return new Promise<any>((resolve, reject)=>{
            try
            {
                if(!fs.existsSync(this.myConfigs.uploadDir + filename))
                    return reject("Can't find file : " + this.myConfigs.uploadDir + filename);
                return resolve(this.toBase64(this.myConfigs.uploadDir + filename));
            }
            catch (err)
            {
                reject(err.message);
            }
        });
    }
    public async set(source:any, filePath:string)
    {
        return new Promise<any>((resolve, reject)=>{
            try
            {
                return this.fromBase64(source, filePath);
            }
            catch (err)
            {
                reject(err.message);
            }
        });
    }
    public async delete()
    {
        return new Promise<any>((resolve, reject)=>{
            try
            {

            }
            catch (err)
            {
                reject(err.message);
            }
        });
    }
}