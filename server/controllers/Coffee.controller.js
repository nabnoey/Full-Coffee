import Coffee from "../models/coffee.model.js"
const newCoffee = {}

newCoffee.create = async (req,res) => {
    const {name,price,image} = req.body;

    if(!name || !price || !image){
         res.status(400).send({message:"ส่งข้อมูลไม่ครบ กรุณาส่งให้ครบด้วยค่ะ"})
        return;
    }

    const newCoffee = {name,price,image}

    Coffee.create(newCoffee).then((data) => {
        res.send(data)
    })
.catch((error) => {
    res.status(500).send({message:error.message})
})
    
}

//getAll
newCoffee.getAll = async (req,res) => {
    await Coffee.findAll().then((data) =>{
        res.send(data)
    }) .catch((error)=>{
        res.send(500).send({message:error.message})
    })
}

//getById
newCoffee.getById = async (req,res) => {
    await Coffee.findByPk(req.params.id).then((data) =>{
        if(!data){
            res.status(404).send({message:"ไม่พบข้อมูล"})
        }else{
            res.send(data)
        
    }
}) .catch((error)=>{
        res.send(500).send({message:error.message})
    })
}   

//Update
newCoffee.update = async (req,res) => {
    const id = req.params.id;
    const {name,price,image} = req.body;
    if(!name || !price || !image){
        res.status(400).send({message:"ส่งข้อมูลไม่ครบ"})
        return;
    }

    await Coffee.update({name,price,image},
        {
        where:{id:id},
        }

    ).then((num)=>{
        if(num==1){
            res.send({message:"แก้ไขข้อมูลเรียบร้อย"})
        }else{
            res.send({message:`ไม่สามารถแก้ไขข้อมูล id=${id} อาจเป็นไปได้ว่าไม่พบข้อมูลหรือข้อมูลไม่เปลี่ยนแปลง`})
        }
    })
};

newCoffee.delete = async (req,res) => {
    const id = req.params.id;
    if(!id){
        res.status(400).send({message:"ส่งข้อมูลไม่ครบ"})
        return;
    }

    await Coffee.destroy({
        where:{id:id}
    }).then((num) =>{
        if(num==1){
            res.send({message:"ลบข้อมูลเรียบร้อย"})
        }else{
            res.send({message:`ไม่สามารถลบข้อมูล id=${id} อาจเป็นไปได้ว่าไม่พบข้อมูล`})
        }

    })
    
}

export default newCoffee;
       