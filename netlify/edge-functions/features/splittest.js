const HTMLConfirmation = `<p>You enabled a split test!</p>`;


export default async function hasFunctions(context) {

  console.log(`Checking for a split test cookie`);
  if(context.cookies.get("nf_ab")){
    return HTMLConfirmation;
  };

}




