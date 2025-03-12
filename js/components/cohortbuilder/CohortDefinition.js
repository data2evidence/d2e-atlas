define(function (require, exports) {

	var ko = require('knockout');
	var CohortExpression = require('./CohortExpression');

	function CohortDefinition(data) {
        const username = sessionStorage.getItem("d2e-username")

		var self = this;
		var data = data || {};

		self.id = ko.observable(data.id);
		self.name = ko.observable(data.name || null);
		self.description = ko.observable(data.description || null);
		self.expressionType = (data.expressionType || "SIMPLE_EXPRESSION");
		self.expression = ko.observable(new CohortExpression(data.expression));
		self.createdBy = username || ko.observable(data.createdBy || null);
		self.createdDate = ko.observable(data.createdDate || +new Date());
		self.modifiedBy = username || ko.observable(data.modifiedBy || null);
		self.modifiedDate = ko.observable(data.modifiedDate || +new Date());
		self.tags = ko.observableArray(data.tags);
	}
	return CohortDefinition;
});