interface IFilterByName {
   name:string
};

export function filterByName<T extends IFilterByName>(items:T[], value:string) {
   const itemValue = value.toLowerCase().trim();
   if(!itemValue.match(/[a-zA-Z]/i)) return [];
   return items.filter((item) => item.name.toLowerCase().includes(itemValue));
}