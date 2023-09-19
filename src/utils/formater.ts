export function flattenText(text: string): string {
    return text.replace(/ /g, "-");
}

function uniqueArray(inputArray: any[]): any[] {
    const uniqueSet = new Set(inputArray);
    
    const uniqueArray = Array.from(uniqueSet);
    
    return uniqueArray;
  }
