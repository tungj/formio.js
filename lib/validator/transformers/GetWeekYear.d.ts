export class GetWeekYearTransformer extends GetDateComponentTransformer {
    static get presetArguments(): {
        unit: {
            valueSource: string;
            stringInput: string;
        };
    };
    constructor(context?: {});
}
import { GetDateComponentTransformer } from "./GetDateComponent";
