const input = ['xc', 'dz', 'bbb', 'dz'] ;
const query = ['bbb', 'ac', 'dz'] ;

const output = query.reduce((a, b) => {
  const l = input.filter(e => e === b).length;
  console.log(l)
  
},[]);

// console.log(output);