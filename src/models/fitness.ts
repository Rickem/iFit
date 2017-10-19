export class Fitness {
    constructor(
        public age: number = 0,
        public bmr: number = 0,
        public bodyFat: number = 0,
        public customRequirements: boolean = false,
        public gender: string = '',
        public heartRate: { max: number, resting: number, trainingMin: number, trainingMax: number } = {
            max: 0,
            resting: 0,
            trainingMin: 0,
            trainingMax: 0
        },
        public height: number = 0,
        public hips: number = 0,
        public lactating: boolean = false,
        public macronutrientRatios: MacronutrientRatios = new MacronutrientRatios(),
        public neck: number = 0,
        public pregnant: boolean = false,
        public waist: number = 0,
        public weight: number = 0
    ) { }
}

export class MacronutrientRatios {
    constructor(
        public carbohydrates: number = 33,
        public fats: number = 33,
        public protein: number = 33
    ) { }
}