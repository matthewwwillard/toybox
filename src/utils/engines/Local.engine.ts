import {BaseEngineCalls} from "../BaseEngineCalls";
import * as fs from 'fs';
import * as path from 'path';

export default class LocalEngine extends BaseEngineCalls
{
    constructor(config:object)
    {
        super(config);
    }
    protected init()
    {
        //generate our upload dir
        if(!fs.existsSync(this.myConfigs.uploadDir))
        {
            fs.mkdirSync(this.myConfigs.uploadDir);
        }
    }
    public get (filename:string)
    {

    }
    public set(source:any, filename:string, dir:string = '/')
    {
        try
        {

        }
        catch (err)
        {

        }
    }
    public delete()
    {

    }
}