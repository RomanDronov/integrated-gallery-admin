let express=require('express');
let cors=require('cors');
let app=express();
var multer  = require('multer')
let PORT='3001';
let host='localhost';
app.listen(PORT,function() {
    console.log(`Listening on ${PORT}`);
});
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
let upload = multer({ storage: storage })
const corsOptions = {
    //origin: /\.your.domain\.com$/,    // reqexp will match all prefixes
    origin: 'http://'+host,
    methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
    credentials: true,                // required to pass
    allowedHeaders: "Content-Type, Authorization, X-Requested-With",
  }
  app.options('*', cors(corsOptions));
  app.post("/upload",cors(corsOptions),upload.array('photos',50),(req,res)=>{
    console.log(req.files);
  });