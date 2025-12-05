export const createProduct = async(req,res)=>{

     const sql = "INSERT INTO products(`name`, `ref`,`description`,`price`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.ref,
        req.body.description,
        req.body.price
    ];

    db.query(sql, [values], (err,data) => {
        if(err){ console.log(err)
          return res.json(err);
        }
        return res.json(data);
    });
    
}