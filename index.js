const names = ["Charlie","Samip", "Ali"]
const events = ["birthday"]

function writeCards (names,events) {
    let message=[]
  for (let i=0; i < names.length; i++) {
     message.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }

  return message
}

const integer = []
function countDown(integer) {
  let i=10
  while (i>=0) {
    console.log (i--)
  }
  return integer
}