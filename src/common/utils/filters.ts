
type filterByNameType = {id:number, name:string};

export function filterByName( items:filterByNameType[], value:string ){
   const itemValue = value.toLowerCase().trim();
   if(!itemValue.match(/[a-zA-Z]/i)) return [];
   return items.filter((item) => item.name.toLowerCase().includes(itemValue));
}