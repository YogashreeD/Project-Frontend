export let trackid = localStorage.getItem('id') || '';
export function trackingid(id){
    
    localStorage.setItem('id',id);
}