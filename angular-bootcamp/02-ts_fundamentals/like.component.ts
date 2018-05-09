export class LikeComponents {
    constructor(private _likesCount:number, private _isSelected:boolean){
    }

    onClick() {
        // if (this.isSelected) {
        //     this.likesCount--;
        //     this.isSelected = false;
        // }else{
        //     this.likesCount++;
        //     this.isSelected = true;
        // }

        // The statment below is uses a "conditional operator".
        // If you are going to have only an "if and else" and
        // no "else if", then this can be much cleaner.
        this._likesCount += (this._isSelected) ? -1 : 1;

        // The code below represents a way
        // to toggle the value of "isSelected".
        // Instead of using the two statement
        // in the if-else statement to toggle.
        this._isSelected = !this._isSelected;
    }

    // The properties below allow us to access the fields.
    get likesCount(){
        return this._likesCount;
    }

    get isSelected(){
        return this._isSelected;
    }
}