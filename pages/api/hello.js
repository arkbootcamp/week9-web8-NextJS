// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connection from '../../configs/db'

export default (req, res) => {
  connection.query("SELECT * FROM products", (err, result)=>{
    if(!err){
      res.status(200).json({ data: result })
    }else{
      console.log(err);
      res.status(500).json({err: 'internal server error'})
    }
  })
}
