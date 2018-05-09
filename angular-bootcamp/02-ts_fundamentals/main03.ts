let message = 'abc';
// This is called type insertion.
// Both methods are the two possible ways.
// However the first method is most common.
let endsWithC = (<string>message.endsWith('c'));
let alternativeWay = (message as string).endsWith('c');