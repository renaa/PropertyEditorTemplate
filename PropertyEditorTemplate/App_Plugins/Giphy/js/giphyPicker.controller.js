function giphyPickerController($scope, $http, $element) {
    setTimeout(function () {
        var input = $element[0].querySelector("#giphy-search");
        if (input) input.focus();
    }, 20);

    $scope.submit = function (result) {
        if ($scope.model.submit) {
            $scope.model.submit(result);
        }
    }
    $scope.close = function () {
        if ($scope.model.close) {
            $scope.model.close();
        }
    }

    $scope.search = function () {
        $scope.model.loading = true;
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${$scope.model.apiKey}&q=${$scope.model.search}`;
        $http({
            method: 'GET',
            url: url,
            headers: {
                'Content-type': 'application/json'
            }
        }).then(function (response) {
            if (response !== null && response !== undefined && response.data !== undefined) {
                $scope.model.results = response.data.data;
            }
            else {
                $scope.model.results = null;
            }
            $scope.model.loading = false;
        }
        )
    }
}
angular.module("umbraco").controller("My.GiphyPickerController", giphyPickerController);