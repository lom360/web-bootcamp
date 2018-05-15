import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' '); //splits the string whenever it encounters a space or ' '.
    for (var i = 0; i < words.length; i++){
      let word = words[i];
      // i > 0 is to take into account if the preposition is the first word of the title
      // isPreposition is a method created below.
      if(i > 0 && this.isPreposition(word))
        words[i] = word.toLowerCase();
      else
        words[i] = this.toTitleCase(word);
    }

    return words.join(' ');
  }

  // Method to capitalize first letter and lowercase any following letters
  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  // This private method is used to determine if a word is a preposition or not.
  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes(word.toLowerCase());
  }
}
