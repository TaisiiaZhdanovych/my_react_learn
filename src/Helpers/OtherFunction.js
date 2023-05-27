export function faveJsonParse(key) {
    
   const lsData = localStorage.getItem(key);
   if (!lsData) return [];
   try {
     const value = JSON.parse(lsData);
     return value;
   } catch (e) {
     return [];
   }
}