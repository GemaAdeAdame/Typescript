"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mail = /** @class */ (function () {
    function Mail(tipoemail, direccionmail) {
        this.tipoemail = tipoemail;
        this.direccionmail = direccionmail;
    }
    Mail.prototype.getTipoemail = function () {
        return this.tipoemail;
    };
    Mail.prototype.getDireccionmail = function () {
        return this.direccionmail;
    };
    Mail.prototype.setTipoemail = function (tipoemail) {
        this.tipoemail = tipoemail;
    };
    Mail.prototype.setDireccionmail = function (direccionmail) {
        this.direccionmail = direccionmail;
    };
    return Mail;
}());
//exportar personas
exports.default = Mail;
