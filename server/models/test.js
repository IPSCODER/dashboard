import mongoose from "mongoose";

const test = new mongoose.Schema({
    added:String,
    country:String,
    end_year:Number,
    id:String,
    impact:Number,
    insight:String,
    intensity:Number,
    likelihood:Number,
    pestle:String,
    published:String,
    region:String,
    relevance:Number,
    sector:String,
    source:String,
    start_year:Number,
    title:String,
    topic:String,
    url:String
})

export default mongoose.model("test",test)