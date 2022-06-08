const router= require('express').Router();
const todoItems=require('../models/todo');


router.post('/api/items',async (req,res)=>{
    try{
        const item= new todoItems({
            item:req.body.item

        })
        const saveitem= await item.save()
        res.status(200).json('item added');

    }
    catch{
        res.json(err);
    }
})
router.get('/api/items',async(req,res)=>{
    try{
        const allItems= await todoItems.find({})
        res.status(200).json(allItems)
    }catch(err){
        res.json(err);
    }
})

router.put('/api/items/:id',async(req,res)=>{
    try{
        const updateitem= await todoItems.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json('updated succ');
    }catch(err){
        res.json(err);
    }
})

router.delete('/api/items/:id',async(req,res)=>{
    try{
        const updateitem= await todoItems.findByIdAndDelete(req.params.id,{$set:req.body})
        res.status(200).json('deleted');
    }catch(err){
        res.json(err);
    }
})
module.exports = router;