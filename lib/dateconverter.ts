
export function dateconverter(date:string){
  return new Intl.DateTimeFormat('en-US',{dateStyle:'short'}).format(new Date(date))


}