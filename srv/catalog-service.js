const cds = require('@sap/cds');

//const system = "s4:/sap/opu/odata/sap/ZAPI_RETURN_WP?sap-client=001";

module.exports = cds.service.impl(async function() {
    const { ZC_RETRUNWORK_WP  } = this.entities;

    //let system = req.data.system.toLowerCase();
    const service = await cds.connect.to('ZAPI_RETURN_WP');
	this.on('READ', ZC_RETRUNWORK_WP , request => {
		return service.tx(request).run(request.query);
	});
});