import {Schema, model, models} from "mongoose"

const OrderSchema = new Schema({
    total: {type: Number, required:true},
    order: {type: Array, required:true},
    products: {type: Array, required:true}
})

export default models.Order || model('Order', OrderSchema)