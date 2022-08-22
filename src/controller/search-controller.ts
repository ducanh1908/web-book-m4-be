// import { Request } from "express";
// import { Book } from "../model/book";
// import { IAuthor } from "../model/author";

// // import { Book } from "src/model/book";

// class SearhControler {
//     async search(req: Request, res: any) {
//         try {
//             let payload = req.body;
//             console.log(payload);
//             let bookSearch = [];
//              await Book.find({ name : {$regex: payload.name} })
//                 .populate('author','name')
//                 .populate('gerne', 'name')
//                 .exec((err, data)=>{
//                     if(err){
//                         console.log(err); 
//                         res.status(401).json({message :"keyword doesn't exist"})                       
//                     }
//                     data.map(item=>{
//                         if(item.author.name.includes(payload.author) && item.gerne.name.includes(payload.gerne)){
//                             bookSearch.push(item)
//                         }
//                     })
//                     res.status(200).json(bookSearch)
//                 });

//             // console.log(bookSearch)
            
//         } catch (err) {
//             console.log(err);
//             res.status(401).json({ message: `Không có kết quả tìm kiếm` })
//         }
//     }
// }
// export default new SearhControler()