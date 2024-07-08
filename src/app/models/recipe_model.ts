import { RecipeType } from "./recipe-type.type";

export class RecipeModel {

    category?: string;
    id: string;

    constructor(
        public title: string,
        public description: string,
        public imgURL: string,
        public createdAt: Date,
        public likes: number,
    ) {
        this.id = '1' //crypto.randomUUID().substring(0, 8);
        
    }

    addLike():void {
            this.likes++
    } 

    removeLike():void {
        this.likes--
    }

    like(recipeType: RecipeType ) {
        if (recipeType === 'like') {
            this.addLike()
        }
        else if (recipeType === 'unlike') {
            this.removeLike()
        }
    }

    setCategory(category: string): void {
        this.category = category
    }

    withCategory(category: string) {
        this.setCategory(category)
        return this
    }
}