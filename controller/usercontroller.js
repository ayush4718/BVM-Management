const User = require('../modal/user');
var mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

module.exports.getUser = async (req, res) => {
    const Users = await User.find()
    res.send({ data: Users })
}

module.exports.createUser = async (req, res) => {
    try {
        const data = await User.create(req.body);
        console.log("data",data)
        res.status(200).send(data);
    } catch (e) {
        console.log('eee++', e);
        res.status(500).json({ massage: 'internal server error' })
    }
}

module.exports.DeleteById = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req?.params?.id)
        res.status(200).send(data)
    } catch (e) {
        console.log('eee++', e);
        res.status(500).json({ massage: 'internal server error' })
    }
}

// module.exports.getUserById = async (req, res) => {
//     try {
//         const data = await User.findById(req?.params?.id)
//         res.status(200).send(data)
//     } catch (e) {
//         console.log('eee++', e);
//         res.status(500).json({ massage: 'internal server error' })
//     }
// }

// module.exports.getUserByEmail = async (req, res) => {
//     try {
//         const data = await User.find({ email: req?.params?.email })
//         res.status(200).send(data)
//     } catch (e) {
//         console.log('eee++', e);
//         res.status(500).json({ massage: 'internal server error' })
//     }
// }

// module.exports.updateData = async (req, res) => {
//     try {
//         const objectId = await new mongoose.Types.ObjectId(req.params?.id)
//         const data = await User.findOneAndUpdate({ _id: objectId }, req?.body)
//         res.status(200).send(data)
//     } catch (e) {
//         console.log('eee++', e);
//         res.status(500).json({ massage: 'internal server error' })
//     }
// }

// module.exports.updateDataById = async (req, res) => {
//     try {
//         const data = await User.findByIdAndUpdate(req?.body?.id, req?.body)
//         res.status(200).send(data)
//     } catch (e) {
//         console.log('eee++', e);
//         res.status(500).json({ massage: 'internal server error' })
//     }
// }
