export function classes(object: { [key:string]: boolean}, existing = '' ) {

  const className =
    Object.getOwnPropertyNames(object).reduce((acc, prop) => acc + (object[prop] ? ' ' + prop : ''), existing);
  return className.trim();

}
