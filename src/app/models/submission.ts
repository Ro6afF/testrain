import { Emotion } from "./emotion";
import { Statement } from "./statement";
import { Statiment } from "./statiment";

export class Submission {
    age: { value: Number, time: Date };
    selectedEmotions: { id: number, density: number, time: Date }[];
    selectedStatements: { dens: number, time: Date }[];
    selectedStatiments: Date[];
    selectedMiniscripts: Date[];
    isMale: boolean;
}