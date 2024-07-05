export class RecipeModel {

    category?: string;

    constructor(
        public title: string,
        public description: string,
        public imgURL: string,
        public createdAt: Date,
        public snaps: number,
    ) {}

    addSnap():void {
            this.snaps++
    } 

    removeSnap():void {
        this.snaps--
    }

    setCategory(category: string): void {
        this.category = category
    }
}