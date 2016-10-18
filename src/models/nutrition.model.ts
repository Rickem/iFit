export class Nutrition {
    constructor(
        public energy: number = 0,
        public macronutrients: any = {
            "Water": 0,
            "Protein": 0,
            "Carbohydrates": 0,
            "Sugars": 0,
            "Glucose": 0,
            "Fructose": 0,
            "Galactose": 0,
            "Lactose": 0,
            "Maltose": 0,
            "Sucrose": 0,
            "Starch": 0,
            "Fiber": 0,
            "Fats": 0,
            "Saturated fat": 0,
            "Monounsaturated fat": 0,
            "Polyunsaturated fat": 0,
            "Trans fat": 0
        },
        public minerals: any = {
            "Calcium": 0,
            "Copper": 0,
            "Flouride": 0,
            "Iron": 0,
            "Magnesium": 0,
            "Manganese": 0,
            "Phosphorus": 0,
            "Potassium": 0,
            "Selenium": 0,
            "Sodium": 0,
            "Zinc": 0
        },
        public vitamins: any = {
            "Vitamin A": 0,
            "alpha-Carotene": 0,
            "beta-Carotene": 0,
            "Vitamin B1": 0,
            "Vitamin B2": 0,
            "Vitamin B3": 0,
            "Vitamin B5": 0,
            "Vitamin B6": 0,
            "Vitamin B9": 0,
            "Folic acid": 0,
            "Choline": 0,
            "Betaine": 0,
            "Vitamin B12": 0,
            "Vitamin C": 0,
            "Vitamin D2": 0,
            "Vitamin D3": 0,
            "Vitamin E": 0,
            "Vitamin K": 0,
            "Astaxanthin": 0,
            "Canthaxanthin": 0,
            "Coenzyme Q10": 0,
            "beta-Cryptoxanthin": 0,
            "alpha-Lipoic acid": 0,
            "Lutein": 0,
            "Lycopene": 0,
            "Retinol": 0,
            "Zeaxanthin": 0
        },
        public aminoacids: any = {
            "Alanine": 0,
            "Arginine": 0,
            "Asparagine": 0,
            "Aspartic acid": 0,
            "Cysteine": 0,
            "Glutamine": 0,
            "Glutamic acid": 0,
            "Glycine": 0,
            "Histidine": 0,
            "Isoleucine": 0,
            "Leucine": 0,
            "Lysine": 0,
            "Methionine": 0,
            "Phenylalanine": 0,
            "Proline": 0,
            "Serine": 0,
            "Threonine": 0,
            "Tryptophan": 0,
            "Tyrosine": 0,
            "Valine": 0
        },
        public flavonoids: any = {
            "Anthocyanidins": 0,
            "Catechins": 0,
            "Flavones": 0,
            "Flavanones": 0,
            "Isoflavones": 0,
            "Flavonols": 0
        },
        public sterols: any = {
            "Campesterol": 0,
            "Cholesterol": 0,
            "Phytosterols": 0,
            "beta-Sitosterol": 0,
            "Stigmasterol": 0
        },
        public other: any = {
            "Alcohol": 0,
            "Caffeine": 0,
            "Melatonin": 0,
            "Theobromine": 0
        }
    ) {
        this["amino acids"] = aminoacids;
        delete this.aminoacids;
    }
}