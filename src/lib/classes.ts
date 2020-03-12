export function classes(object: { [key:string]: boolean} ) {

  const className =
    Object.getOwnPropertyNames(object).reduce((acc, prop) => acc + (object[prop] ? ' ' + prop : ''), '');
  return className.trim();

}
