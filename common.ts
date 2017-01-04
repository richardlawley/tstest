/// <reference path="common.d.ts" />

String.prototype.startsWith = function (prefix: string) {
	return this.indexOf(prefix) === 0;
};