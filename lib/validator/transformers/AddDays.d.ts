export class AddDaysTransformer extends AddDateComponentTransformer {
    static get presetArguments(): {
        unit: {
            valueSource: string;
            stringInput: string;
        };
    };
    constructor(context?: {});
}
import { AddDateComponentTransformer } from "./AddDateComponent";
