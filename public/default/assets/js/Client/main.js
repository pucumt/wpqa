var hideConfirmForm;
window.showAlert = function (msg, title, callback) {
    $('#confirmModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#confirmModal #confirmModalLabel').text(title || "提示");
    $('#confirmModal .modal-body').text(msg);

    $('#confirmModal .modal-footer .btn-default').text("确定");
    $('#confirmModal #btnConfirmSave').hide();

    hideConfirmForm = function () {
        callback && callback();
        $('#confirmModal').hide();
    };
};

window.showConfirm = function (msg, title, hidecallback) {
    $('#confirmModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#confirmModal #confirmModalLabel').text(title || "确认");
    $('#confirmModal .modal-body').text(msg);

    $('#confirmModal .modal-footer .btn-default').text("取消");
    $('#confirmModal #btnConfirmSave').show();

    hideConfirmForm = function () {
        hidecallback && hidecallback();
        $('#confirmModal').hide();
    };
};

$(document).ready(function () {
    $("#btnAsk").click(function (e) {
        location.replace("/ask");
    });

    $("#btnSearch").click(function (e) {
        var q = $.trim($("#txtSearch").val());
        if (q.length > 2) {
            location.replace("/?q=" + q);
        } else {
            showAlert("搜索字数不能少于3个");
        }
    });
});

window.selfAjax = function (method, url, filter, callback) {
    loading();
    return $[method](
        url,
        filter
    ).then(function (data) {
        callback(data);
        hideLoading();
        return data;
    });
};

window.loading = function () {
    $("#loadingIndicator").modal({
        backdrop: 'static',
        keyboard: false
    });
};

window.hideLoading = function () {
    $("#loadingIndicator").modal('hide');
};

String.prototype.format = function () {
    var result = this;
    if (arguments.length == 0)
        return null;
    for (var i = 0; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i) + '\\}', 'gm');
        result = result.replace(re, arguments[i]);
    }
    return result;
};