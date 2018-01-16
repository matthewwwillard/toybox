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
    public get(){}
    public set(){}
    public delete(){}

}