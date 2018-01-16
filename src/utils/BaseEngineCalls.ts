/**
 * BaseEngineCalls.ts
 * - Used to define all callable functions within the toybox.
 */

export class BaseEngineCalls
{
    protected myConfigs;
    constructor(config:object)
    {
        this.myConfigs = config;
        this.init();
    }
    protected init(){}
    protected get(filename?:string){}
    public set(source?:any, filename?:string, dir:string = '/'){}
    public delete(filename?:string){}

}