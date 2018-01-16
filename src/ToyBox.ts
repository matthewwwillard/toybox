import {BaseEngineCalls} from "./utils/BaseEngineCalls";
import * as engines from './utils/engines';

export class ToyBox{
    private config:object;
    private allEngines:BaseEngineCalls[] = [];

    constructor(config:object = null)
    {
        this.config = config;

        for(let engine in engines)
        {
            let e:BaseEngineCalls = new engines[engine](this.config);
            this.allEngines[engine.toLowerCase()] = e;
        }

    }
    public engine(name:string)
    {
        return this.allEngines[name.toLowerCase()];
    }

}