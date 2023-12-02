// Kinda wild I don't have to define this as a module or anything to run.
const res = await fetch("https://deno.com");
const body = await res.text();
console.log(body);
