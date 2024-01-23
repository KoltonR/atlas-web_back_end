export default function guardrail(mathFunction) {
    const thisArray = [];
  
    try {
      thisArray.push(mathFunction());
    } catch (err) {
      thisArray.push(err.toString());
    } finally {
      thisArray.push('Guardrail was processed');
    }
    return thisArray;
  }