import Users from "../model/users";
let PAGE=1;
let LIMIT=10
export const getUsers=async(req, res)=>{
    const {page, limit}=req.query ;
    if(page) PAGE=page;
    if(limit) LIMIT=limit;
    try {
        const usersData=await Users.find().skip(PAGE-1).limit(LIMIT);
        res.status(200).json({data: usersData, pagination: {page: PAGE, limit: LIMIT}, statusCode: 0, message: "Lấy danh sách người dùng thành công"})
    } catch (error) {
        console.log(error);
    }
};

export const getUser=async(req, res)=>{
    const {id}=req.params;
    try {
        const userData=await Users.findById(id).exec();
        res.status(200).json({data: userData, statusCode: 0, message: "Lấy thông tin người dùng thành công" })
    } catch (error) {
        console.log(error)
    }
};
export const addUser=async(req, res)=>{
    const data=req.body;
    try {
        const newUser= new Users({...data});
        await newUser.save()
         res.status(200).json({data, statusCode: 0, message: "Thêm người dùng thành công"})
       
    } catch (error) {
        console.log(error)
    }
}
export const upadateUser=async(req, res)=>{
    const data=req.body;
    const {id}=req.params;
    try {
        await Users.findByIdAndUpdate(id, data, {new: true});
         res.status(200).json({data, statusCode: 0, message: "Update người dùng thành công" })
       
    } catch (error) {
        console.log(error)
    }
}
export const deleteUser=async(req, res)=>{
    const {id}=req.params;
    try {
        await Users.findByIdAndDelete(id);
        res.json({ statusCode: 0, message: "Xóa người dùng thành công" });
    } catch (error) {
        console.log(error)
    }
};