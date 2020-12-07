import nc from 'next-connect'

const handler = nc ()
  .get((req, res) => {
    res.json({message: 'ok'})
  })
  
  .post((req, res) => {
    res.json({message: 'posted'})
  })


export default handler




// (req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({ message: 'hello this is your API' }))
//   }