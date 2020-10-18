function giphyPropertyEditorController($scope, editorService) {
    $scope.add = function () {
        var giphyPicker = {
            apiKey: $scope.model.config.apiKey,
            title: "Animated Gif Search",
            view: "/App_Plugins/Giphy/giphyPicker.html",
            size: "medium",
            submit: function (model) {
                $scope.model.value = model.images.original.url; 
                editorService.close();
            },
            close: function () {
                editorService.close();
            }
        };
        editorService.open(giphyPicker);
    };
    $scope.remove = function () {
        $scope.model.value = null;
    }
}
angular.module("umbraco").controller("My.GiphyPropertyEditorController", giphyPropertyEditorController);
