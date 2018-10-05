const express = require('express');
const next = require('next');
const http = require('http');


const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

var bodyParser=require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/snowflakedb";

app
    .prepare()
    .then(()=>{
        const server = express();

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({
            extended:true
        }));

        

        server.get("*",(req,res)=>{
            return handle(req,res);
        });

        
        server.post('/save',(req,res)=>{
            MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
                if(err) throw err;
                
                //Break URL down into array
                var record = req.body.theUrl;
                record=record.replace(/\%20/g," ");
                var array=record.split(',');
                array[0]=array[0].slice(-1);
                array[29]=array[29].toLowerCase();
                array[29]=array[29].charAt(0).toUpperCase()+array[29].slice(1);
                array[30]=array[30].toUpperCase();
        
                var dbo=db.db("snowflakedb");
        
                var query={_id:array[31]};
                var myobj={
                    BOOKING:array[0],
                    BOOKING_CORE:array[1],
                    SHIPMENT:array[2],
                    PRODUCT_AND_ROUTING:array[3], 
                    PRICING:array[4],
                    HAULAGE:array[5],
                    CUSTOMER:array[6],
                    ACTIVITY_PLAN:array[7],
                    ALLOCATION:array[8],
                    TPDOC:array[9],
                    FRAMEWORK:array[10],
                    FUI:array[11],
                    CARGO:array[12],
                    SPECIAL_CARGO:array[13],
                    INTERFACES:array[14],
                    DOC_PROCESS_ENG:array[15],
                    DOCBROKER:array[16],
                    ARCHIVING:array[17],
                    TOP:array[18],
                    GHDER:array[19],
                    DECOMMISSIONED:array[20],
                    REF_DAT_MGMT:array[21],
                    UI_FMWK:array[22],
                    SAT:array[23],
                    DEVELOPMENT:array[24],
                    ENVIRONMENT:array[25],
                    GENERAL_KNW:array[26],
                    NAME:array[27],
                    TITLE:array[28],
                    LOCATION:array[29],
                    TEAM:array[30],
                    _id:array[31]
                }
                
                //See if the user already exists
                dbo.collection("records").find(query).toArray(function(err,result){
                    if(err) throw err;
                    if(result.length==0){
                        dbo.collection("records").insertOne(myobj,function(err,res){
                            if(err)throw err;
                        });
                    }else{
                        var newValues={$set:{BOOKING:array[0],BOOKING_CORE:array[1],SHIPMENT:array[2],PRODUCT_AND_ROUTING:array[3], PRICING:array[4],HAULAGE:array[5],CUSTOMER:array[6],ACTIVITY_PLAN:array[7],ALLOCATION:array[8],TPDOC:array[9],FRAMEWORK:array[10],FUI:array[11],CARGO:array[12],SPECIAL_CARGO:array[13],INTERFACES:array[14],DOC_PROCESS_ENG:array[15],DOCBROKER:array[16],ARCHIVING:array[17],TOP:array[18],GHDER:array[19],DECOMMISSIONED:array[20],REF_DAT_MGMT:array[21],UI_FMWK:array[22],SAT:array[23],DEVELOPMENT:array[24],ENVIRONMENT:array[25],GENERAL_KNW:array[26],NAME:array[27],TITLE:array[28],LOCATION:array[29],TEAM:array[30],_id:array[31]}};
                        dbo.collection("records").updateOne(query,newValues,function(err,res){
                            if(err) throw err;
                        });
                    }
                    db.close();
                });
            });
            resultURL = req.body.theUrl;
            res.redirect("app?#"+resultURL);
        });

        server.post("/find",function(req,res){
            var userID=req.body.searchID;
            var theArray=[];
            var resultURL="";
        
            MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
                if(err) throw err;
                var query={_id:userID};
                dbo=db.db("snowflakedb");
                dbo.collection("records").find(query).toArray(function(err,result){
                if(err) throw err;
                if(result.length==0){
                    res.redirect("../app");
                }else{
                theArray=Object.values(result[0]);
                db.close();
    
                var i;
                for(i=1;i<theArray.length;i++){
                    resultURL+=theArray[i]+",";
                }
                //Append ID to URL
                resultURL+=theArray[0];
                resultURL=resultURL.replace(/ /g,"%20");
                resultURL="?#"+resultURL;
                res.redirect("/app"+resultURL);
                }});
            });
        });
        
        server.post('/findall',function(req,res){
            var teamName = req.query.team;
            
            if(teamName=='all'||teamName=="null"){
                var query={};
            }else{
                var query={TEAM:teamName};
            } 
            MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
                if(err) throw err;
                dbo=db.db("snowflakedb");

                dbo.collection("records").find(query).sort({ NAME:1 }).toArray(function(err,result){
                    if(err) throw err;

                    var employees = {
                        hits:[]
                    };

                    result.map(function(item){
                        employees.hits.push({
                            "BOOKING":item.BOOKING,
                            "BOOKING_CORE":item.BOOKING_CORE,
                            "SHIPMENT":item.SHIPMENT,
                            "PRODUCT_AND_ROUTING":item.PRODUCT_AND_ROUTING, 
                            "PRICING":item.PRICING,
                            "HAULAGE":item.HAULAGE,
                            "CUSTOMER":item.CUSTOMER,
                            "ACTIVITY_PLAN":item.ACTIVITY_PLAN,
                            "ALLOCATION":item.ALLOCATION,
                            "TPDOC":item.TPDOC,
                            "FRAMEWORK":item.FRAMEWORK,
                            "FUI":item.FUI,
                            "CARGO":item.CARGO,
                            "SPECIAL_CARGO":item.SPECIAL_CARGO,
                            "INTERFACES":item.INTERFACES,
                            "DOC_PROCESS_ENG":item.DOC_PROCESS_ENG,
                            "DOCBROKER":item.DOCBROKER,
                            "ARCHIVING":item.ARCHIVING,
                            "TOP":item.TOP,
                            "GHDER":item.GHDER,
                            "DECOMMISSIONED":item.DECOMMISSIONED,
                            "REF_DAT_MGMT":item.REF_DAT_MGMT,
                            "UI_FMWK":item.UI_FMWK,
                            "SAT":item.SAT,
                            "DEVELOPMENT":item.DEVELOPMENT,
                            "ENVIRONMENT":item.ENVIRONMENT,
                            "GENERAL_KNW":item.GENERAL_KNW,
                            "NAME":item.NAME,
                            "TITLE":item.TITLE,
                            "LOCATION":item.LOCATION,
                            "TEAM":item.TEAM,
                            "_id":item._id
                        });
                    });
                    db.close();
                    res.send(employees);
                    
                });
            });
        });

        server.post('/teams',function(req,res){
            MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
                if(err) throw err;
                dbo=db.db("snowflakedb");

                dbo.collection("records").find({}, { projection: { _id:0, TEAM:1 } }).toArray(function(err,result){
                    if(err) throw err;
                    var teams = {
                        hits:[]
                    };
                    result.map(function(item){
                        teams.hits.push({
                            "TEAM":item.TEAM
                        });
                    });
                    db.close();
                    res.send(teams);
                });
            });
        });
        

        server.post('/team',function(req,res){
            MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
                if(err) throw err;

                var teamID=req.body.teamName;
                
                var query={TEAM:teamID};
                dbo=db.db("snowflakedb");
                dbo.collection("records").find(query).toArray(function(err,result){
                    if(err) throw err;

                    var recordNo=result.length;
                    output=new Array(27).fill(0);
                    
                    var i;
                    for(i=0;i<result.length;i++){
                        output[0]+=Number(result[i].BOOKING);
                        output[1]+=Number(result[i].BOOKING_CORE);
                        output[2]+=Number(result[i].SHIPMENT);
                        output[3]+=Number(result[i].PRODUCT_AND_ROUTING);
                        output[4]+=Number(result[i].PRICING);
                        output[5]+=Number(result[i].HAULAGE);
                        output[6]+=Number(result[i].CUSTOMER);
                        output[7]+=Number(result[i].ACTIVITY_PLAN);
                        output[8]+=Number(result[i].ALLOCATION);
                        output[9]+=Number(result[i].TPDOC);
                        output[10]+=Number(result[i].FRAMEWORK);
                        output[11]+=Number(result[i].FUI);
                        output[12]+=Number(result[i].CARGO);
                        output[13]+=Number(result[i].SPECIAL_CARGO);
                        output[14]+=Number(result[i].INTERFACES);
                        output[15]+=Number(result[i].DOC_PROCESS_ENG);
                        output[16]+=Number(result[i].DOCBROKER);
                        output[17]+=Number(result[i].ARCHIVING);
                        output[18]+=Number(result[i].TOP);
                        output[19]+=Number(result[i].GHDER);
                        output[20]+=Number(result[i].DECOMMISSIONED);
                        output[21]+=Number(result[i].REF_DAT_MGMT);
                        output[22]+=Number(result[i].UI_FMWK);
                        output[23]+=Number(result[i].SAT);
                        output[24]+=Number(result[i].DEVELOPMENT);
                        output[25]+=Number(result[i].ENVIRONMENT);
                        output[26]+=Number(result[i].GENERAL_KNW);
                    }
                    var i;
                    for(i=0;i<output.length;i++){
                        output[i]=Math.round(output[i]/recordNo);
                    }
                    
                    output[output.length]=teamID;
                    var resultURL="";   
                    var i;
                    for(i=0;i<output.length;i++){
                        resultURL+=output[i]+",";
                    }  
                    
                    resultURL = resultURL.slice(0,-1);
                    resultURL="?#"+resultURL;
                   
                    res.redirect("team"+resultURL);              
                });
            });
           
        });


        server.listen(port,err=>{
            if(err) throw err;
            console.log('>ready on :'+port)
        });
    })
    .catch(ex=>{
        console.error(ex.stack);
        process.exit(1);
});