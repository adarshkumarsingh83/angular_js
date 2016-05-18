/**
 * Created by Adarsh on 12/9/15.
 */

var application = angular.module("Application", ['pascalprecht.translate']);

application.controller('TranslateController', function ($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});

application.config(function ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'locales/',
            suffix: '.json'
        })
        .registerAvailableLanguageKeys(['en', 'de','fr'], {
            'en' : 'en', 'en_GB': 'en', 'en_US': 'en',
            'de' : 'de', 'de_DE': 'de', 'de_CH': 'de',
            'fr' : 'fr', 'fr_FR': 'fr', 'fr_CA': 'fr'
        })
        .preferredLanguage('en')
        .fallbackLanguage('en')
        .determinePreferredLanguage()
        .useSanitizeValueStrategy('escapeParameters');
});
