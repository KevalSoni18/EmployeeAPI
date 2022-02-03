var express = require('express');
var router = express.Router();
var Employee = require('./Models/Employee')

router.get('/Employee',async(req,res)=>{
    const emp = await Employee.find()
    res.send(emp)
})

router.post("/Employee",async(req,res)=>{
    const emp = new Employee({
        Ename:req.body.Ename,
        salary:req.body.salary
    })

    await emp.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})

router.patch('/Employee/:id',async(req,res)=>{
	const emp = await Employee.findOne({_id:req.params.id})
	emp.Ename = req.body.Ename
	emp.salary = req.body.salary
	await emp.save((err,msg)=>{
		if(err){
			res.status(500).json({
				"error":err
			})
		}
		else{
			res.status(200).json({
				"msg":msg
			})
		}
	})
})


router.delete("/Employee/:id",async(req,res)=>{
    const _id = req.params.id;
    const EData = await Employee.findByIdAndDelete(_id);
    res.send(EData);
  });

module.exports = router 