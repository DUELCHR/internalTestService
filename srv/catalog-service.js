const cds = require('@sap/cds');

//const system = "s4:/sap/opu/odata/sap/ZAPI_RETURN_WP?sap-client=001";

module.exports = cds.service.impl(async function () {
    const { ZEW_ODOSet } = this.entities;
    const service = await cds.connect.to('metadata');
    
    this.on('READ', ZEW_ODOSet, request => {
        return service.tx(request).run(request.query);
    });
});
// connect to external server 
//const srv = cds.connect.to('my.external.service')
//const { Authors } = srv.entities
 // share request context with the external service
  // inside a custom handler
 //  const tx = srv.transaction(req)
    // URL string input
  //   const response = await tx.get('/Authors?$select=name') 
    // CSN entity input and fluent query API 
  //  const response = await tx.read(Authors).where({ID: 1}) 
    // CQN input from fluent query API 
 //   const cqn = SELECT.from(Authors) const response = await tx.run(cqn)