function DeshabilitarCors(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, PATCH, OPTIONS"
        );
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        next();
}

module.exports.DeshabilitarCors = DeshabilitarCors;