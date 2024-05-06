const express=require('express');
const {generateShortUrl, showAllEntries, SHORTid, handleGetAnalytics}=require("../controllers/url");

const router=express.Router();

router.post("/",generateShortUrl);

router.get("/:shortId", SHORTid);

router.get("/analytics/:shortId", handleGetAnalytics);

router.get("/",showAllEntries);


module.exports=router;